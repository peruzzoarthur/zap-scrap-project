import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { writeFile } from 'fs/promises';
import { promises as fs } from 'fs';
import * as https from 'https';
import { ZapSearch } from './types';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ZapService {
  async saveJson() {
    const uuid = uuidv4();
    const headers = {
      Host: 'glue-api.zapimoveis.com.br',
      'User-Agent':
        'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0',
      Accept: '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      Referer: 'https://www.zapimoveis.com.br/',
      'X-Domain': '.zapimoveis.com.br',
      'X-Deviceid': uuid,
      Origin: 'https://www.zapimoveis.com.br',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      Priority: 'u=0',
      Te: 'trailers',
    };

    const caCert = await fs.readFile(
      '/home/arthur/coldLab/scrap/server/src/utils/ca.crt',
    );
    const httpsAgent = new https.Agent({
      ca: caCert,
    });
    try {
      const getUrl = await this.createUrl(uuid);
      const response = await axios.get(getUrl, {
        headers,
        responseType: 'arraybuffer',
        httpsAgent: httpsAgent,
        proxy: {
          host: process.env.PROXY_HOST,
          port: Number(process.env.PROXY_PORT),
          protocol: 'http',
          auth: {
            username: process.env.PROXY_USER,
            password: process.env.PROXY_PASSWORD,
          },
        },
      });

      // Convert binary data to string
      const responseData = Buffer.from(response.data, 'binary').toString(
        'utf-8',
      );

      // Parse JSON from string
      const jsonData = JSON.parse(responseData);

      // Save JSON data to file
      await writeFile(
        '/home/arthur/coldLab/scrap/server/src/zap/all_houses_rent_pelotas.json',
        JSON.stringify(jsonData, null, 2), // Pretty-print JSON with indentation
      );

      console.log(
        'Data saved successfully at: /home/arthur/coldLab/scrap/server/src/zap/all_houses_rent_pelotas.json',
      );

      return jsonData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', {
          message: error.message,
          code: error.code,
          response: error.response
            ? {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
              }
            : undefined,
          config: error.config,
        });
      } else {
        console.error('Error:', error);
      }
    }
  }

  async parseJson() {
    const fileContent = await fs.readFile(
      '/home/arthur/coldLab/scrap/server/src/zap/all_houses_rent_pelotas.json',
      'utf8',
    );
    const parsedJson: ZapSearch = JSON.parse(fileContent);

    const listing = parsedJson.search.result.listings.map((l) => {
      const medias = l.medias;
      const action = 'crop';
      const width = '614';
      const height = '297';
      const description = 'anydesc';
      const updatedMedias = medias.map((m) => {
        const updatedUrl = m.url
          .replace('{action}', action)
          .replace('{width}', width)
          .replace('{height}', height)
          .replace('{description}', description);
        return {
          ...m,
          url: updatedUrl,
        };
      });
      return { ...l, medias: updatedMedias };

      // https://resizedimgs.zapimoveis.com.br/crop/614x297/named.images.sp/958dcb9f914a82e1fc7454f285d8245a/casa-com-3-quartos-para-alugar-50m-no-centro-pelotas.webp

      // "https://resizedimgs.zapimoveis.com.br/{action}/{width}x{height}/named.images.sp/d9c6e780fcb9a0e236a247035b4048e5/{description}.webp",
    });
    return listing;
  }

  async createUrl(userId: string) {
    // Base URL
    const baseUrl = 'https://glue-api.zapimoveis.com.br/v2/listings';

    // Manually encoded includeFields parameter
    // Other query parameters
    const params = {
      user: userId,
      portal: 'ZAP',
      includeFields,
      categoryPage: 'RESULT',
      developmentsSize: '2',
      superPremiumSize: '3',
      topoFixoSize: '1',
      business: 'RENTAL',
      parentId: 'null',
      listingType: 'USED',
      // priceMax: '1400',
      addressCity: 'Pelotas,Pelotas',
      addressLocationId:
        'BR>Rio Grande do Sul>NULL>Pelotas>Barrios>Centro,BR>Rio Grande do Sul>NULL>Pelotas>Barrios>Porto',
      addressState: 'Rio Grande do Sul,Rio Grande do Sul',
      addressNeighborhood: 'Centro,Porto',
      // addressPointLat: '-31.772692,-31.763182',
      // addressPointLon: '-52.345373,-52.310794',
      addressType: 'neighborhood,neighborhood',
      unitTypes: 'HOME',
      unitTypesV3: 'HOME',
      unitSubTypes:
        'UnitSubType_NONE,TWO_STORY_HOUSE,SINGLE_STOREY_HOUSE,KITNET',
      usageTypes: 'RESIDENTIAL',
      size: '76',
      page: '1',
      ref: '',
      images: 'webp',
      viewport: 'null',
      __zt: 'mtc:deduplication2023',
    };

    // Encode the basic parameters
    const queryString = new URLSearchParams(params).toString();

    // Combine base URL and query string
    const fullUrl = `${baseUrl}?${queryString}`;

    console.log(fullUrl);

    return fullUrl;
  }
}
const size = 20;
const urlOriginal = `https://glue-api.zapimoveis.com.br/v2/listings?user=dbd54c99-3346-4433-b6ba-9b42aaf89d50&portal=ZAP&includeFields=search%28result%28listings%28listing%28contractType%2ClistingsCount%2CsourceId%2CdisplayAddressType%2Camenities%2CusableAreas%2CconstructionStatus%2ClistingType%2Cdescription%2Ctitle%2Cstamps%2CcreatedAt%2Cfloors%2CunitTypes%2CnonActivationReason%2CproviderId%2CpropertyType%2CunitSubTypes%2CunitsOnTheFloor%2ClegacyId%2Cid%2Cportal%2CunitFloor%2CparkingSpaces%2CupdatedAt%2Caddress%2Csuites%2CpublicationType%2CexternalId%2Cbathrooms%2CusageTypes%2CtotalAreas%2CadvertiserId%2CadvertiserContact%2CwhatsappNumber%2Cbedrooms%2CacceptExchange%2CpricingInfos%2CshowPrice%2Cresale%2Cbuildings%2CcapacityLimit%2Cstatus%2CpriceSuggestion%29%2Caccount%28id%2Cname%2ClogoUrl%2ClicenseNumber%2CshowAddress%2ClegacyVivarealId%2ClegacyZapId%2CcreatedDate%2Ctier%29%2Cmedias%2CaccountLink%2Clink%29%29%2CtotalCount%29%2Cpage%2Cfacets%2CfullUriFragments%2CsuperPremium%28search%28result%28listings%28listing%28contractType%2ClistingsCount%2CsourceId%2CdisplayAddressType%2Camenities%2CusableAreas%2CconstructionStatus%2ClistingType%2Cdescription%2Ctitle%2Cstamps%2CcreatedAt%2Cfloors%2CunitTypes%2CnonActivationReason%2CproviderId%2CpropertyType%2CunitSubTypes%2CunitsOnTheFloor%2ClegacyId%2Cid%2Cportal%2CunitFloor%2CparkingSpaces%2CupdatedAt%2Caddress%2Csuites%2CpublicationType%2CexternalId%2Cbathrooms%2CusageTypes%2CtotalAreas%2CadvertiserId%2CadvertiserContact%2CwhatsappNumber%2Cbedrooms%2CacceptExchange%2CpricingInfos%2CshowPrice%2Cresale%2Cbuildings%2CcapacityLimit%2Cstatus%2CpriceSuggestion%29%2Caccount%28id%2Cname%2ClogoUrl%2ClicenseNumber%2CshowAddress%2ClegacyVivarealId%2ClegacyZapId%2CcreatedDate%2Ctier%29%2Cmedias%2CaccountLink%2Clink%29%29%2CtotalCount%29%29%2Cschema%2CtopoFixo%28search%28result%28listings%28listing%28listingsCount%2CsourceId%2CdisplayAddressType%2Camenities%2CusableAreas%2CconstructionStatus%2ClistingType%2Cdescription%2Ctitle%2Cstamps%2CcreatedAt%2Cfloors%2CunitTypes%2CnonActivationReason%2CproviderId%2CpropertyType%2CunitSubTypes%2CunitsOnTheFloor%2ClegacyId%2Cid%2Cportal%2CunitFloor%2CparkingSpaces%2CupdatedAt%2Caddress%2Csuites%2CpublicationType%2CexternalId%2Cbathrooms%2CusageTypes%2CtotalAreas%2CadvertiserId%2CadvertiserContact%2CwhatsappNumber%2Cbedrooms%2CacceptExchange%2CpricingInfos%2CshowPrice%2Cresale%2Cbuildings%2CcapacityLimit%2Cstatus%2CpriceSuggestion%2CadvertiserUrl%29%2Caccount%28id%2Cname%2ClogoUrl%2ClicenseNumber%2CshowAddress%2ClegacyVivarealId%2ClegacyZapId%2CcreatedDate%2Ctier%2Crating%29%2Cmedias%2CaccountLink%2Clink%29%29%2CtotalCount%29%29&categoryPage=RESULT&developmentsSize=2&superPremiumSize=3&topoFixoSize=1&business=RENTAL&parentId=null&listingType=USED&priceMax=1400&addressCity=Pelotas%2CPelotas&addressLocationId=BR%3ERio+Grande+do+Sul%3ENULL%3EPelotas%3EBarrios%3ECentro%2CBR%3ERio+Grande+do+Sul%3ENULL%3EPelotas%3EBarrios%3EPorto&addressState=Rio+Grande+do+Sul%2CRio+Grande+do+Sul&addressNeighborhood=Centro%2CPorto&addressPointLat=-31.772692%2C-31.763182&addressPointLon=-52.345373%2C-52.310794&addressType=neighborhood%2Cneighborhood&unitTypes=HOME&unitTypesV3=HOME&unitSubTypes=UnitSubType_NONE%2CTWO_STORY_HOUSE%2CSINGLE_STOREY_HOUSE%2CKITNET&usageTypes=RESIDENTIAL&size=${size}&page=1&ref=&images=webp&viewport=null&__zt=mtc%3Adeduplication2023`; // Replace with the full URL

const includeFields =
  'search(result(listings(listing(contractType,listingsCount,sourceId,displayAddressType,amenities,usableAreas,constructionStatus,listingType,description,title,stamps,createdAt,floors,unitTypes,nonActivationReason,providerId,propertyType,unitSubTypes,unitsOnTheFloor,legacyId,id,portal,unitFloor,parkingSpaces,updatedAt,address,suites,publicationType,externalId,bathrooms,usageTypes,totalAreas,advertiserId,advertiserContact,whatsappNumber,bedrooms,acceptExchange,pricingInfos,showPrice,resale,buildings,capacityLimit,status,priceSuggestion),account(id,name,logoUrl,licenseNumber,showAddress,legacyVivarealId,legacyZapId,createdDate,tier),medias,accountLink,link)),totalCount),page,facets,fullUriFragments,superPremium(search(result(listings(listing(contractType,listingsCount,sourceId,displayAddressType,amenities,usableAreas,constructionStatus,listingType,description,title,stamps,createdAt,floors,unitTypes,nonActivationReason,providerId,propertyType,unitSubTypes,unitsOnTheFloor,legacyId,id,portal,unitFloor,parkingSpaces,updatedAt,address,suites,publicationType,externalId,bathrooms,usageTypes,totalAreas,advertiserId,advertiserContact,whatsappNumber,bedrooms,acceptExchange,pricingInfos,showPrice,resale,buildings,capacityLimit,status,priceSuggestion),account(id,name,logoUrl,licenseNumber,showAddress,legacyVivarealId,legacyZapId,createdDate,tier),medias,accountLink,link)),totalCount)),schema,topoFixo(search(result(listings(listing(listingsCount,sourceId,displayAddressType,amenities,usableAreas,constructionStatus,listingType,description,title,stamps,createdAt,floors,unitTypes,nonActivationReason,providerId,propertyType,unitSubTypes,unitsOnTheFloor,legacyId,id,portal,unitFloor,parkingSpaces,updatedAt,address,suites,publicationType,externalId,bathrooms,usageTypes,totalAreas,advertiserId,advertiserContact,whatsappNumber,bedrooms,acceptExchange,pricingInfos,showPrice,resale,buildings,capacityLimit,status,priceSuggestion,advertiserUrl),account(id,name,logoUrl,licenseNumber,showAddress,legacyVivarealId,legacyZapId,createdDate,tier,rating),medias,accountLink,link)),totalCount)))';
