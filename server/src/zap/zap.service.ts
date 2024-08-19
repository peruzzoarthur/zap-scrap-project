import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ZapSearch } from './types';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class ZapService {
  async parseJson() {
    const parsedJson: ZapSearch = await this.fetchData();

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

  async fetchData(): Promise<ZapSearch> {
    const uuid = uuidv4();
    const url = await this.createUrl(uuid);
    const res = await axios.post('http://localhost:8000/zapp/fetch-data/', {
      url: url,
    });
    return res.data as ZapSearch;
  }

  async createUrl(userId: string) {
    const baseUrl = 'https://glue-api.zapimoveis.com.br/v2/listings';

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

    // console.log(fullUrl);

    return fullUrl;
  }
}
const size = 20;
const urlOriginal = `https://glue-api.zapimoveis.com.br/v2/listings?user=dbd54c99-3346-4433-b6ba-9b42aaf89d50&portal=ZAP&includeFields=search%28result%28listings%28listing%28contractType%2ClistingsCount%2CsourceId%2CdisplayAddressType%2Camenities%2CusableAreas%2CconstructionStatus%2ClistingType%2Cdescription%2Ctitle%2Cstamps%2CcreatedAt%2Cfloors%2CunitTypes%2CnonActivationReason%2CproviderId%2CpropertyType%2CunitSubTypes%2CunitsOnTheFloor%2ClegacyId%2Cid%2Cportal%2CunitFloor%2CparkingSpaces%2CupdatedAt%2Caddress%2Csuites%2CpublicationType%2CexternalId%2Cbathrooms%2CusageTypes%2CtotalAreas%2CadvertiserId%2CadvertiserContact%2CwhatsappNumber%2Cbedrooms%2CacceptExchange%2CpricingInfos%2CshowPrice%2Cresale%2Cbuildings%2CcapacityLimit%2Cstatus%2CpriceSuggestion%29%2Caccount%28id%2Cname%2ClogoUrl%2ClicenseNumber%2CshowAddress%2ClegacyVivarealId%2ClegacyZapId%2CcreatedDate%2Ctier%29%2Cmedias%2CaccountLink%2Clink%29%29%2CtotalCount%29%2Cpage%2Cfacets%2CfullUriFragments%2CsuperPremium%28search%28result%28listings%28listing%28contractType%2ClistingsCount%2CsourceId%2CdisplayAddressType%2Camenities%2CusableAreas%2CconstructionStatus%2ClistingType%2Cdescription%2Ctitle%2Cstamps%2CcreatedAt%2Cfloors%2CunitTypes%2CnonActivationReason%2CproviderId%2CpropertyType%2CunitSubTypes%2CunitsOnTheFloor%2ClegacyId%2Cid%2Cportal%2CunitFloor%2CparkingSpaces%2CupdatedAt%2Caddress%2Csuites%2CpublicationType%2CexternalId%2Cbathrooms%2CusageTypes%2CtotalAreas%2CadvertiserId%2CadvertiserContact%2CwhatsappNumber%2Cbedrooms%2CacceptExchange%2CpricingInfos%2CshowPrice%2Cresale%2Cbuildings%2CcapacityLimit%2Cstatus%2CpriceSuggestion%29%2Caccount%28id%2Cname%2ClogoUrl%2ClicenseNumber%2CshowAddress%2ClegacyVivarealId%2ClegacyZapId%2CcreatedDate%2Ctier%29%2Cmedias%2CaccountLink%2Clink%29%29%2CtotalCount%29%29%2Cschema%2CtopoFixo%28search%28result%28listings%28listing%28listingsCount%2CsourceId%2CdisplayAddressType%2Camenities%2CusableAreas%2CconstructionStatus%2ClistingType%2Cdescription%2Ctitle%2Cstamps%2CcreatedAt%2Cfloors%2CunitTypes%2CnonActivationReason%2CproviderId%2CpropertyType%2CunitSubTypes%2CunitsOnTheFloor%2ClegacyId%2Cid%2Cportal%2CunitFloor%2CparkingSpaces%2CupdatedAt%2Caddress%2Csuites%2CpublicationType%2CexternalId%2Cbathrooms%2CusageTypes%2CtotalAreas%2CadvertiserId%2CadvertiserContact%2CwhatsappNumber%2Cbedrooms%2CacceptExchange%2CpricingInfos%2CshowPrice%2Cresale%2Cbuildings%2CcapacityLimit%2Cstatus%2CpriceSuggestion%2CadvertiserUrl%29%2Caccount%28id%2Cname%2ClogoUrl%2ClicenseNumber%2CshowAddress%2ClegacyVivarealId%2ClegacyZapId%2CcreatedDate%2Ctier%2Crating%29%2Cmedias%2CaccountLink%2Clink%29%29%2CtotalCount%29%29&categoryPage=RESULT&developmentsSize=2&superPremiumSize=3&topoFixoSize=1&business=RENTAL&parentId=null&listingType=USED&priceMax=1400&addressCity=Pelotas%2CPelotas&addressLocationId=BR%3ERio+Grande+do+Sul%3ENULL%3EPelotas%3EBarrios%3ECentro%2CBR%3ERio+Grande+do+Sul%3ENULL%3EPelotas%3EBarrios%3EPorto&addressState=Rio+Grande+do+Sul%2CRio+Grande+do+Sul&addressNeighborhood=Centro%2CPorto&addressPointLat=-31.772692%2C-31.763182&addressPointLon=-52.345373%2C-52.310794&addressType=neighborhood%2Cneighborhood&unitTypes=HOME&unitTypesV3=HOME&unitSubTypes=UnitSubType_NONE%2CTWO_STORY_HOUSE%2CSINGLE_STOREY_HOUSE%2CKITNET&usageTypes=RESIDENTIAL&size=${size}&page=1&ref=&images=webp&viewport=null&__zt=mtc%3Adeduplication2023`; // Replace with the full URL

const includeFields =
  'search(result(listings(listing(contractType,listingsCount,sourceId,displayAddressType,amenities,usableAreas,constructionStatus,listingType,description,title,stamps,createdAt,floors,unitTypes,nonActivationReason,providerId,propertyType,unitSubTypes,unitsOnTheFloor,legacyId,id,portal,unitFloor,parkingSpaces,updatedAt,address,suites,publicationType,externalId,bathrooms,usageTypes,totalAreas,advertiserId,advertiserContact,whatsappNumber,bedrooms,acceptExchange,pricingInfos,showPrice,resale,buildings,capacityLimit,status,priceSuggestion),account(id,name,logoUrl,licenseNumber,showAddress,legacyVivarealId,legacyZapId,createdDate,tier),medias,accountLink,link)),totalCount),page,facets,fullUriFragments,superPremium(search(result(listings(listing(contractType,listingsCount,sourceId,displayAddressType,amenities,usableAreas,constructionStatus,listingType,description,title,stamps,createdAt,floors,unitTypes,nonActivationReason,providerId,propertyType,unitSubTypes,unitsOnTheFloor,legacyId,id,portal,unitFloor,parkingSpaces,updatedAt,address,suites,publicationType,externalId,bathrooms,usageTypes,totalAreas,advertiserId,advertiserContact,whatsappNumber,bedrooms,acceptExchange,pricingInfos,showPrice,resale,buildings,capacityLimit,status,priceSuggestion),account(id,name,logoUrl,licenseNumber,showAddress,legacyVivarealId,legacyZapId,createdDate,tier),medias,accountLink,link)),totalCount)),schema,topoFixo(search(result(listings(listing(listingsCount,sourceId,displayAddressType,amenities,usableAreas,constructionStatus,listingType,description,title,stamps,createdAt,floors,unitTypes,nonActivationReason,providerId,propertyType,unitSubTypes,unitsOnTheFloor,legacyId,id,portal,unitFloor,parkingSpaces,updatedAt,address,suites,publicationType,externalId,bathrooms,usageTypes,totalAreas,advertiserId,advertiserContact,whatsappNumber,bedrooms,acceptExchange,pricingInfos,showPrice,resale,buildings,capacityLimit,status,priceSuggestion,advertiserUrl),account(id,name,logoUrl,licenseNumber,showAddress,legacyVivarealId,legacyZapId,createdDate,tier,rating),medias,accountLink,link)),totalCount)))';
