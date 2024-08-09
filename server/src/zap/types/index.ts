// To parse this data:
//
//   import { Convert, ZapSearch } from "./file";
//
//   const zapSearch = Convert.toZapSearch(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ZapSearch {
  search: Search;
  page: Page;
  facets: Facets;
  fullUriFragments: FullURIFragments;
  superPremium: SuperPremium;
  schema: Schema;
}

export interface Facets {
  amenities: Amenities;
}

export interface Amenities {
  KITCHEN: number;
  SERVICE_AREA: number;
  PETS_ALLOWED: number;
  BACKYARD: number;
  BATHTUB: number;
  GARAGE: number;
  GARDEN: number;
  AIR_CONDITIONING: number;
  ALARM_SYSTEM: number;
  BALCONY: number;
}

export interface FullURIFragments {
  addresses: AddressElement[];
  business: Business;
  priceMax: number;
  unitTypes: UnitType[];
  unitSubTypes: string[];
  unitTypesV3: UnitType[];
  usageTypes: UsageType[];
  listingType: ListingType;
  parentId: string;
  viewport: string;
}

export interface AddressElement {
  state: string;
  city: City;
  neighborhood: Neighborhood;
  locationId: string;
  point: PurplePoint;
}

export enum City {
  Pelotas = 'Pelotas',
}

export enum Neighborhood {
  Centro = 'Centro',
  Porto = 'Porto',
}

export interface PurplePoint {
  lat: number;
  lon: number;
}

export enum Business {
  Rental = 'RENTAL',
  Sale = 'SALE',
}

export enum ListingType {
  Used = 'USED',
}

export enum UnitType {
  Home = 'HOME',
}

export enum UsageType {
  Residential = 'RESIDENTIAL',
}

export interface Page {
  widgets: Widget[];
  metaContent: MetaContent;
  uriFragments: URIFragments;
  uriCategory: URICategory;
  uriPagination: URIPagination;
  link: FooterClass;
  condominium: null;
  redirectRule: null;
}

export interface FooterClass {
  data: FooterData;
  name: string;
  href: string;
  rel: string;
}

export interface FooterData {}

export interface MetaContent {
  robots: string;
  title: string;
  description: string;
  primaryHeading: string;
  secondaryHeading: string;
  shouldCountAds: boolean;
}

export interface URICategory {
  levels: string[];
  name: string;
  page: string;
  portal: string;
}

export interface URIFragments {
  unitSubTypes: string[];
  business: Business;
  address: URIFragmentsAddress;
  unitType: UnitType;
  usageType: UsageType;
  amenity: string;
  propertyType: string;
  listingType: ListingType;
  constructionStatus: ConstructionStatus;
  bedrooms: number;
  advertiserId: string;
  listingId: string;
  condominiumUuid: string;
  condominiumName: string;
  advertiserLegacyId: number;
  pricingInfo: null;
  condominiumShortUuid: string;
  condominium: null;
  unitTypeV3: UnitType;
  advertiser: Advertiser;
  campaign: Campaign;
  pointRadius: string;
  contentManagementId: string;
  area: string;
  neighborhoodsGuide: null;
  seoKeyword: null;
}

export interface URIFragmentsAddress {
  pois: any[];
  valuableZones: any[];
  poisList: any[];
  country: string;
  state: string;
  city: City;
  district: string;
  zone: string;
  neighborhood: Neighborhood;
  street: string;
  streetNumber: string;
  complement: string;
  zipCode: string;
  level: string;
  point: FluffyPoint;
  geoJson: string;
  precision: string;
  name: string;
  locationId: string;
  source: string;
  confidence: string;
  ibgeCityId: string;
  stateAcronym: string;
}

export interface FluffyPoint {
  lat: number;
  lon: number;
  source: string;
}

export interface Advertiser {
  id: string;
  legacyVivaRealId: number;
  legacyZapId: number;
  name: string;
}

export interface Campaign {
  name: string;
}

export enum ConstructionStatus {
  ConstructionStatusNONE = 'ConstructionStatus_NONE',
}

export interface URIPagination {
  page: number;
  from: number;
  size: number;
  total: number;
  totalListingCounter: number;
}

export interface Widget {
  links: LinkElement[];
  header: FooterClass | null;
  footer: FooterClass | null;
  category: string;
}

export interface LinkElement {
  data: PurpleData;
  name: string;
  href: string;
  rel: Rel;
}

export interface PurpleData {
  ListingCount?: string;
}

export enum Rel {
  Empty = '',
  Index = 'INDEX',
}

export interface Schema {
  '@context': string;
  '@type': string;
  url: string;
  itemListElement: any[];
}

export interface Search {
  result: Result;
  totalCount: number;
}

export interface Result {
  listings: ListingElement[];
}

export interface ListingElement {
  listing: ListingListing;
  account: Account;
  medias: Media[];
  accountLink: FooterClass;
  link: PurpleLink;
}

export interface Account {
  id: string;
  name: string;
  licenseNumber: string;
  showAddress: boolean;
  legacyVivarealId: number;
  legacyZapId: number;
  createdDate: Date;
  tier: Tier;
  logoUrl?: string;
}

export enum Tier {
  Diamond = 'diamond',
  Gold = 'gold',
  Platinum = 'platinum',
}

export interface PurpleLink {
  data: FluffyData;
  name: string;
  href: string;
  rel: string;
}

export interface FluffyData {
  street: string;
  streetNumber: string;
  state: string;
  city: City;
  zone: string;
  neighborhood: Neighborhood;
}

export interface ListingListing {
  contractType: ContractType;
  sourceId: string;
  displayAddressType: DisplayAddressType;
  amenities: string[];
  usableAreas: number[];
  constructionStatus: ConstructionStatus;
  listingType: ListingType;
  description: string;
  title: string;
  stamps: any[];
  createdAt: Date;
  floors: number[];
  unitTypes: UnitType[];
  nonActivationReason: NonActivationReason;
  providerId: string;
  propertyType: PropertyType;
  unitSubTypes: string[];
  unitsOnTheFloor: number;
  legacyId: string;
  id: string;
  portal: Portal;
  unitFloor: number;
  parkingSpaces: number[];
  updatedAt: Date;
  address: ListingAddress;
  suites: number[];
  publicationType: PublicationType;
  externalId: string;
  bathrooms: number[];
  usageTypes: UsageType[];
  totalAreas: number[];
  advertiserId: string;
  advertiserContact: AdvertiserContact;
  whatsappNumber: string;
  bedrooms: number[];
  acceptExchange: boolean;
  pricingInfos: PricingInfo[];
  showPrice: boolean;
  resale: boolean;
  buildings: number;
  capacityLimit: any[];
  status: Status;
}

export interface ListingAddress {
  city: City;
  neighborhood: Neighborhood;
  street?: string;
  streetNumber?: string;
  point: TentacledPoint;
  stateAcronym: StateAcronym;
}

export interface TentacledPoint {
  lat?: number;
  lon?: number;
  source: Source;
  approximateLat?: number;
  approximateLon?: number;
  radius?: number;
}

export enum Source {
  Google = 'GOOGLE',
}

export enum StateAcronym {
  Rs = 'RS',
}

export interface AdvertiserContact {
  chat: string;
  phones: string[];
}

export enum ContractType {
  RealEstate = 'REAL_ESTATE',
}

export enum DisplayAddressType {
  All = 'ALL',
  Neighborhood = 'NEIGHBORHOOD',
  Street = 'STREET',
}

export enum NonActivationReason {
  NonActivationReasonNONE = 'NonActivationReason_NONE',
}

export enum Portal {
  Grupozap = 'GRUPOZAP',
}

export interface PricingInfo {
  businessType: Business;
  yearlyIptu?: number;
  price: number;
  monthlyCondoFee: number;
  rentalInfo: RentalInfo;
}

export interface RentalInfo {
  period: Period;
  warranties: string[];
  monthlyRentalTotalPrice?: number;
}

export enum Period {
  Monthly = 'MONTHLY',
}

export enum PropertyType {
  Unit = 'UNIT',
}

export enum PublicationType {
  Premiere1 = 'PREMIERE_1',
  Premium = 'PREMIUM',
  Standard = 'STANDARD',
}

export enum Status {
  Active = 'ACTIVE',
}

export interface Media {
  id: string;
  url: string;
  type: Type;
}

export enum Type {
  Image = 'IMAGE',
}

export interface SuperPremium {
  search: Search;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toZapSearch(json: string): ZapSearch {
    return cast(JSON.parse(json), r('ZapSearch'));
  }

  public static zapSearchToJson(value: ZapSearch): string {
    return JSON.stringify(uncast(value, r('ZapSearch')), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`,
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(', ')}]`;
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = '',
  parent: any = '',
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent,
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any,
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty('props')
          ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  ZapSearch: o(
    [
      { json: 'search', js: 'search', typ: r('Search') },
      { json: 'page', js: 'page', typ: r('Page') },
      { json: 'facets', js: 'facets', typ: r('Facets') },
      {
        json: 'fullUriFragments',
        js: 'fullUriFragments',
        typ: r('FullURIFragments'),
      },
      { json: 'superPremium', js: 'superPremium', typ: r('SuperPremium') },
      { json: 'schema', js: 'schema', typ: r('Schema') },
    ],
    false,
  ),
  Facets: o(
    [{ json: 'amenities', js: 'amenities', typ: r('Amenities') }],
    false,
  ),
  Amenities: o(
    [
      { json: 'KITCHEN', js: 'KITCHEN', typ: 0 },
      { json: 'SERVICE_AREA', js: 'SERVICE_AREA', typ: 0 },
      { json: 'PETS_ALLOWED', js: 'PETS_ALLOWED', typ: 0 },
      { json: 'BACKYARD', js: 'BACKYARD', typ: 0 },
      { json: 'BATHTUB', js: 'BATHTUB', typ: 0 },
      { json: 'GARAGE', js: 'GARAGE', typ: 0 },
      { json: 'GARDEN', js: 'GARDEN', typ: 0 },
      { json: 'AIR_CONDITIONING', js: 'AIR_CONDITIONING', typ: 0 },
      { json: 'ALARM_SYSTEM', js: 'ALARM_SYSTEM', typ: 0 },
      { json: 'BALCONY', js: 'BALCONY', typ: 0 },
    ],
    false,
  ),
  FullURIFragments: o(
    [
      { json: 'addresses', js: 'addresses', typ: a(r('AddressElement')) },
      { json: 'business', js: 'business', typ: r('Business') },
      { json: 'priceMax', js: 'priceMax', typ: 0 },
      { json: 'unitTypes', js: 'unitTypes', typ: a(r('UnitType')) },
      { json: 'unitSubTypes', js: 'unitSubTypes', typ: a('') },
      { json: 'unitTypesV3', js: 'unitTypesV3', typ: a(r('UnitType')) },
      { json: 'usageTypes', js: 'usageTypes', typ: a(r('UsageType')) },
      { json: 'listingType', js: 'listingType', typ: r('ListingType') },
      { json: 'parentId', js: 'parentId', typ: '' },
      { json: 'viewport', js: 'viewport', typ: '' },
    ],
    false,
  ),
  AddressElement: o(
    [
      { json: 'state', js: 'state', typ: '' },
      { json: 'city', js: 'city', typ: r('City') },
      { json: 'neighborhood', js: 'neighborhood', typ: r('Neighborhood') },
      { json: 'locationId', js: 'locationId', typ: '' },
      { json: 'point', js: 'point', typ: r('PurplePoint') },
    ],
    false,
  ),
  PurplePoint: o(
    [
      { json: 'lat', js: 'lat', typ: 3.14 },
      { json: 'lon', js: 'lon', typ: 3.14 },
    ],
    false,
  ),
  Page: o(
    [
      { json: 'widgets', js: 'widgets', typ: a(r('Widget')) },
      { json: 'metaContent', js: 'metaContent', typ: r('MetaContent') },
      { json: 'uriFragments', js: 'uriFragments', typ: r('URIFragments') },
      { json: 'uriCategory', js: 'uriCategory', typ: r('URICategory') },
      { json: 'uriPagination', js: 'uriPagination', typ: r('URIPagination') },
      { json: 'link', js: 'link', typ: r('FooterClass') },
      { json: 'condominium', js: 'condominium', typ: null },
      { json: 'redirectRule', js: 'redirectRule', typ: null },
    ],
    false,
  ),
  FooterClass: o(
    [
      { json: 'data', js: 'data', typ: r('FooterData') },
      { json: 'name', js: 'name', typ: '' },
      { json: 'href', js: 'href', typ: '' },
      { json: 'rel', js: 'rel', typ: '' },
    ],
    false,
  ),
  FooterData: o([], false),
  MetaContent: o(
    [
      { json: 'robots', js: 'robots', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'description', js: 'description', typ: '' },
      { json: 'primaryHeading', js: 'primaryHeading', typ: '' },
      { json: 'secondaryHeading', js: 'secondaryHeading', typ: '' },
      { json: 'shouldCountAds', js: 'shouldCountAds', typ: true },
    ],
    false,
  ),
  URICategory: o(
    [
      { json: 'levels', js: 'levels', typ: a('') },
      { json: 'name', js: 'name', typ: '' },
      { json: 'page', js: 'page', typ: '' },
      { json: 'portal', js: 'portal', typ: '' },
    ],
    false,
  ),
  URIFragments: o(
    [
      { json: 'unitSubTypes', js: 'unitSubTypes', typ: a('') },
      { json: 'business', js: 'business', typ: r('Business') },
      { json: 'address', js: 'address', typ: r('URIFragmentsAddress') },
      { json: 'unitType', js: 'unitType', typ: r('UnitType') },
      { json: 'usageType', js: 'usageType', typ: r('UsageType') },
      { json: 'amenity', js: 'amenity', typ: '' },
      { json: 'propertyType', js: 'propertyType', typ: '' },
      { json: 'listingType', js: 'listingType', typ: r('ListingType') },
      {
        json: 'constructionStatus',
        js: 'constructionStatus',
        typ: r('ConstructionStatus'),
      },
      { json: 'bedrooms', js: 'bedrooms', typ: 0 },
      { json: 'advertiserId', js: 'advertiserId', typ: '' },
      { json: 'listingId', js: 'listingId', typ: '' },
      { json: 'condominiumUuid', js: 'condominiumUuid', typ: '' },
      { json: 'condominiumName', js: 'condominiumName', typ: '' },
      { json: 'advertiserLegacyId', js: 'advertiserLegacyId', typ: 0 },
      { json: 'pricingInfo', js: 'pricingInfo', typ: null },
      { json: 'condominiumShortUuid', js: 'condominiumShortUuid', typ: '' },
      { json: 'condominium', js: 'condominium', typ: null },
      { json: 'unitTypeV3', js: 'unitTypeV3', typ: r('UnitType') },
      { json: 'advertiser', js: 'advertiser', typ: r('Advertiser') },
      { json: 'campaign', js: 'campaign', typ: r('Campaign') },
      { json: 'pointRadius', js: 'pointRadius', typ: '' },
      { json: 'contentManagementId', js: 'contentManagementId', typ: '' },
      { json: 'area', js: 'area', typ: '' },
      { json: 'neighborhoodsGuide', js: 'neighborhoodsGuide', typ: null },
      { json: 'seoKeyword', js: 'seoKeyword', typ: null },
    ],
    false,
  ),
  URIFragmentsAddress: o(
    [
      { json: 'pois', js: 'pois', typ: a('any') },
      { json: 'valuableZones', js: 'valuableZones', typ: a('any') },
      { json: 'poisList', js: 'poisList', typ: a('any') },
      { json: 'country', js: 'country', typ: '' },
      { json: 'state', js: 'state', typ: '' },
      { json: 'city', js: 'city', typ: r('City') },
      { json: 'district', js: 'district', typ: '' },
      { json: 'zone', js: 'zone', typ: '' },
      { json: 'neighborhood', js: 'neighborhood', typ: r('Neighborhood') },
      { json: 'street', js: 'street', typ: '' },
      { json: 'streetNumber', js: 'streetNumber', typ: '' },
      { json: 'complement', js: 'complement', typ: '' },
      { json: 'zipCode', js: 'zipCode', typ: '' },
      { json: 'level', js: 'level', typ: '' },
      { json: 'point', js: 'point', typ: r('FluffyPoint') },
      { json: 'geoJson', js: 'geoJson', typ: '' },
      { json: 'precision', js: 'precision', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'locationId', js: 'locationId', typ: '' },
      { json: 'source', js: 'source', typ: '' },
      { json: 'confidence', js: 'confidence', typ: '' },
      { json: 'ibgeCityId', js: 'ibgeCityId', typ: '' },
      { json: 'stateAcronym', js: 'stateAcronym', typ: '' },
    ],
    false,
  ),
  FluffyPoint: o(
    [
      { json: 'lat', js: 'lat', typ: 3.14 },
      { json: 'lon', js: 'lon', typ: 3.14 },
      { json: 'source', js: 'source', typ: '' },
    ],
    false,
  ),
  Advertiser: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'legacyVivaRealId', js: 'legacyVivaRealId', typ: 0 },
      { json: 'legacyZapId', js: 'legacyZapId', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
    ],
    false,
  ),
  Campaign: o([{ json: 'name', js: 'name', typ: '' }], false),
  URIPagination: o(
    [
      { json: 'page', js: 'page', typ: 0 },
      { json: 'from', js: 'from', typ: 0 },
      { json: 'size', js: 'size', typ: 0 },
      { json: 'total', js: 'total', typ: 0 },
      { json: 'totalListingCounter', js: 'totalListingCounter', typ: 0 },
    ],
    false,
  ),
  Widget: o(
    [
      { json: 'links', js: 'links', typ: a(r('LinkElement')) },
      { json: 'header', js: 'header', typ: u(r('FooterClass'), null) },
      { json: 'footer', js: 'footer', typ: u(r('FooterClass'), null) },
      { json: 'category', js: 'category', typ: '' },
    ],
    false,
  ),
  LinkElement: o(
    [
      { json: 'data', js: 'data', typ: r('PurpleData') },
      { json: 'name', js: 'name', typ: '' },
      { json: 'href', js: 'href', typ: '' },
      { json: 'rel', js: 'rel', typ: r('Rel') },
    ],
    false,
  ),
  PurpleData: o(
    [{ json: 'ListingCount', js: 'ListingCount', typ: u(undefined, '') }],
    false,
  ),
  Schema: o(
    [
      { json: '@context', js: '@context', typ: '' },
      { json: '@type', js: '@type', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'itemListElement', js: 'itemListElement', typ: a('any') },
    ],
    false,
  ),
  Search: o(
    [
      { json: 'result', js: 'result', typ: r('Result') },
      { json: 'totalCount', js: 'totalCount', typ: 0 },
    ],
    false,
  ),
  Result: o(
    [{ json: 'listings', js: 'listings', typ: a(r('ListingElement')) }],
    false,
  ),
  ListingElement: o(
    [
      { json: 'listing', js: 'listing', typ: r('ListingListing') },
      { json: 'account', js: 'account', typ: r('Account') },
      { json: 'medias', js: 'medias', typ: a(r('Media')) },
      { json: 'accountLink', js: 'accountLink', typ: r('FooterClass') },
      { json: 'link', js: 'link', typ: r('PurpleLink') },
    ],
    false,
  ),
  Account: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'name', js: 'name', typ: '' },
      { json: 'licenseNumber', js: 'licenseNumber', typ: '' },
      { json: 'showAddress', js: 'showAddress', typ: true },
      { json: 'legacyVivarealId', js: 'legacyVivarealId', typ: 0 },
      { json: 'legacyZapId', js: 'legacyZapId', typ: 0 },
      { json: 'createdDate', js: 'createdDate', typ: Date },
      { json: 'tier', js: 'tier', typ: r('Tier') },
      { json: 'logoUrl', js: 'logoUrl', typ: u(undefined, '') },
    ],
    false,
  ),
  PurpleLink: o(
    [
      { json: 'data', js: 'data', typ: r('FluffyData') },
      { json: 'name', js: 'name', typ: '' },
      { json: 'href', js: 'href', typ: '' },
      { json: 'rel', js: 'rel', typ: '' },
    ],
    false,
  ),
  FluffyData: o(
    [
      { json: 'street', js: 'street', typ: '' },
      { json: 'streetNumber', js: 'streetNumber', typ: '' },
      { json: 'state', js: 'state', typ: '' },
      { json: 'city', js: 'city', typ: r('City') },
      { json: 'zone', js: 'zone', typ: '' },
      { json: 'neighborhood', js: 'neighborhood', typ: r('Neighborhood') },
    ],
    false,
  ),
  ListingListing: o(
    [
      { json: 'contractType', js: 'contractType', typ: r('ContractType') },
      { json: 'sourceId', js: 'sourceId', typ: '' },
      {
        json: 'displayAddressType',
        js: 'displayAddressType',
        typ: r('DisplayAddressType'),
      },
      { json: 'amenities', js: 'amenities', typ: a('') },
      { json: 'usableAreas', js: 'usableAreas', typ: a(0) },
      {
        json: 'constructionStatus',
        js: 'constructionStatus',
        typ: r('ConstructionStatus'),
      },
      { json: 'listingType', js: 'listingType', typ: r('ListingType') },
      { json: 'description', js: 'description', typ: '' },
      { json: 'title', js: 'title', typ: '' },
      { json: 'stamps', js: 'stamps', typ: a('any') },
      { json: 'createdAt', js: 'createdAt', typ: Date },
      { json: 'floors', js: 'floors', typ: a(0) },
      { json: 'unitTypes', js: 'unitTypes', typ: a(r('UnitType')) },
      {
        json: 'nonActivationReason',
        js: 'nonActivationReason',
        typ: r('NonActivationReason'),
      },
      { json: 'providerId', js: 'providerId', typ: '' },
      { json: 'propertyType', js: 'propertyType', typ: r('PropertyType') },
      { json: 'unitSubTypes', js: 'unitSubTypes', typ: a('') },
      { json: 'unitsOnTheFloor', js: 'unitsOnTheFloor', typ: 0 },
      { json: 'legacyId', js: 'legacyId', typ: '' },
      { json: 'id', js: 'id', typ: '' },
      { json: 'portal', js: 'portal', typ: r('Portal') },
      { json: 'unitFloor', js: 'unitFloor', typ: 0 },
      { json: 'parkingSpaces', js: 'parkingSpaces', typ: a(0) },
      { json: 'updatedAt', js: 'updatedAt', typ: Date },
      { json: 'address', js: 'address', typ: r('ListingAddress') },
      { json: 'suites', js: 'suites', typ: a(0) },
      {
        json: 'publicationType',
        js: 'publicationType',
        typ: r('PublicationType'),
      },
      { json: 'externalId', js: 'externalId', typ: '' },
      { json: 'bathrooms', js: 'bathrooms', typ: a(0) },
      { json: 'usageTypes', js: 'usageTypes', typ: a(r('UsageType')) },
      { json: 'totalAreas', js: 'totalAreas', typ: a(0) },
      { json: 'advertiserId', js: 'advertiserId', typ: '' },
      {
        json: 'advertiserContact',
        js: 'advertiserContact',
        typ: r('AdvertiserContact'),
      },
      { json: 'whatsappNumber', js: 'whatsappNumber', typ: '' },
      { json: 'bedrooms', js: 'bedrooms', typ: a(0) },
      { json: 'acceptExchange', js: 'acceptExchange', typ: true },
      { json: 'pricingInfos', js: 'pricingInfos', typ: a(r('PricingInfo')) },
      { json: 'showPrice', js: 'showPrice', typ: true },
      { json: 'resale', js: 'resale', typ: true },
      { json: 'buildings', js: 'buildings', typ: 0 },
      { json: 'capacityLimit', js: 'capacityLimit', typ: a('any') },
      { json: 'status', js: 'status', typ: r('Status') },
    ],
    false,
  ),
  ListingAddress: o(
    [
      { json: 'city', js: 'city', typ: r('City') },
      { json: 'neighborhood', js: 'neighborhood', typ: r('Neighborhood') },
      { json: 'street', js: 'street', typ: u(undefined, '') },
      { json: 'streetNumber', js: 'streetNumber', typ: u(undefined, '') },
      { json: 'point', js: 'point', typ: r('TentacledPoint') },
      { json: 'stateAcronym', js: 'stateAcronym', typ: r('StateAcronym') },
    ],
    false,
  ),
  TentacledPoint: o(
    [
      { json: 'lat', js: 'lat', typ: u(undefined, 3.14) },
      { json: 'lon', js: 'lon', typ: u(undefined, 3.14) },
      { json: 'source', js: 'source', typ: r('Source') },
      { json: 'approximateLat', js: 'approximateLat', typ: u(undefined, 3.14) },
      { json: 'approximateLon', js: 'approximateLon', typ: u(undefined, 3.14) },
      { json: 'radius', js: 'radius', typ: u(undefined, 0) },
    ],
    false,
  ),
  AdvertiserContact: o(
    [
      { json: 'chat', js: 'chat', typ: '' },
      { json: 'phones', js: 'phones', typ: a('') },
    ],
    false,
  ),
  PricingInfo: o(
    [
      { json: 'businessType', js: 'businessType', typ: r('Business') },
      { json: 'yearlyIptu', js: 'yearlyIptu', typ: u(undefined, 0) },
      { json: 'price', js: 'price', typ: 0 },
      { json: 'monthlyCondoFee', js: 'monthlyCondoFee', typ: 0 },
      { json: 'rentalInfo', js: 'rentalInfo', typ: r('RentalInfo') },
    ],
    false,
  ),
  RentalInfo: o(
    [
      { json: 'period', js: 'period', typ: r('Period') },
      { json: 'warranties', js: 'warranties', typ: a('') },
      {
        json: 'monthlyRentalTotalPrice',
        js: 'monthlyRentalTotalPrice',
        typ: u(undefined, 0),
      },
    ],
    false,
  ),
  Media: o(
    [
      { json: 'id', js: 'id', typ: '' },
      { json: 'url', js: 'url', typ: '' },
      { json: 'type', js: 'type', typ: r('Type') },
    ],
    false,
  ),
  SuperPremium: o([{ json: 'search', js: 'search', typ: r('Search') }], false),
  City: ['Pelotas'],
  Neighborhood: ['Centro', 'Porto'],
  Business: ['RENTAL', 'SALE'],
  ListingType: ['USED'],
  UnitType: ['HOME'],
  UsageType: ['RESIDENTIAL'],
  ConstructionStatus: ['ConstructionStatus_NONE'],
  Rel: ['', 'INDEX'],
  Tier: ['diamond', 'gold', 'platinum'],
  Source: ['GOOGLE'],
  StateAcronym: ['RS'],
  ContractType: ['REAL_ESTATE'],
  DisplayAddressType: ['ALL', 'NEIGHBORHOOD', 'STREET'],
  NonActivationReason: ['NonActivationReason_NONE'],
  Portal: ['GRUPOZAP'],
  Period: ['MONTHLY'],
  PropertyType: ['UNIT'],
  PublicationType: ['PREMIERE_1', 'PREMIUM', 'STANDARD'],
  Status: ['ACTIVE'],
  Type: ['IMAGE'],
};
