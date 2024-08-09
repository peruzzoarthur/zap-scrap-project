export type Search = {
  result: Result;
  totalCount: number;
};

export type Result = {
  listings: ListingElement[];
};

export type ListingElement = {
  account: Account;
  accountLink: FooterClass;
  link: PurpleLink;
  listing: ListingListing;
  medias: Media[];
};

export type ListingListing = {
  acceptExchange: boolean;
  address: ListingAddress;
  amenities: string[];
  bathrooms: number[];
  bedrooms: number[];
  buildings: number;
  capacityLimit: any[];
  constructionStatus: ConstructionStatus;
  createdAt: Date;
  description: string;
  displayAddressType: DisplayAddressType;
  externalId: string;
  floors: number[];
  id: string;
  legacyId: string;
  listingType: ListingType;
  nonActivationReason: NonActivationReason;
  parkingSpaces: number[];
  portal: Portal;
  pricingInfos: PricingInfo[];
  publicationType: PublicationType;
  providerId: string;
  propertyType: PropertyType;
  resale: boolean;
  status: Status;
  showPrice: boolean;
  stamps: any[];
  suites: number[];
  totalAreas: number[];
  updatedAt: Date;
  unitFloor: number;
  unitsOnTheFloor: number;
  unitSubTypes: string[];
  unitTypes: UnitType[];
  usageTypes: UsageType[];
};

export type ListingAddress = {
  city: City;
  neighborhood: Neighborhood;
  point: TentacledPoint;
  stateAcronym: StateAcronym;
  street?: string;
  streetNumber?: string;
};

export type TentacledPoint = {
  approximateLat?: number;
  approximateLon?: number;
  lat?: number;
  lon?: number;
  radius?: number;
  source: Source;
};
export type FooterClass = {
  data: FooterData;
  href: string;
  name: string;
  rel: string;
};

export type FooterData = {};

export enum Source {
  Google = "GOOGLE",
}

export enum StateAcronym {
  Rs = "RS",
}

export type AdvertiserContact = {
  chat: string;
  phones: string[];
};

export enum ContractType {
  RealEstate = "REAL_ESTATE",
}

export enum DisplayAddressType {
  All = "ALL",
  Neighborhood = "NEIGHBORHOOD",
  Street = "STREET",
}

export enum NonActivationReason {
  NonActivationReasonNONE = "NonActivationReason_NONE",
}

export enum Portal {
  Grupozap = "GRUPOZAP",
}

export type PricingInfo = {
  businessType: Business;
  monthlyCondoFee: number;
  price: number;
  rentalInfo: RentalInfo;
  yearlyIptu?: number;
};

export type RentalInfo = {
  monthlyRentalTotalPrice?: number;
  period: Period;
  warranties: string[];
};

export enum Period {
  Monthly = "MONTHLY",
}

export enum PropertyType {
  Unit = "UNIT",
}

export enum PublicationType {
  Premiere1 = "PREMIERE_1",
  Premium = "PREMIUM",
  Standard = "STANDARD",
}

export enum Status {
  Active = "ACTIVE",
}

export type Media = {
  id: string;
  type: Type;
  url: string;
};

export enum Type {
  Image = "IMAGE",
}

export type SuperPremium = {
  search: Search;
};
export type Account = {
  createdDate: Date;
  id: string;
  licenseNumber: string;
  legacyVivarealId: number;
  legacyZapId: number;
  logoUrl?: string;
  name: string;
  showAddress: boolean;
  tier: Tier;
};

export enum Tier {
  Diamond = "diamond",
  Gold = "gold",
  Platinum = "platinum",
}

export type PurpleLink = {
  data: FluffyData;
  href: string;
  name: string;
  rel: string;
};

export type FluffyData = {
  city: City;
  neighborhood: Neighborhood;
  state: string;
  street: string;
  streetNumber: string;
  zone: string;
};

export enum City {
  Pelotas = "Pelotas",
}

export enum Neighborhood {
  Centro = "Centro",
  Porto = "Porto",
}

export type PurplePoint = {
  lat: number;
  lon: number;
};

export enum Business {
  Rental = "RENTAL",
  Sale = "SALE",
}

export enum ListingType {
  Used = "USED",
}

export enum UnitType {
  Home = "HOME",
}

export enum UsageType {
  Residential = "RESIDENTIAL",
}

export enum ConstructionStatus {
  ConstructionStatusNONE = "ConstructionStatus_NONE",
}
