export type StarRatingType = "1" | "2" | "3" | "4" | "5";

export interface HotelModel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: StarRatingType;
  facilities: { code: number }[];
  telephone: string;
  email: string;
  images: {
    url: string;
    alt?: string;
  }[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    latitude: number;
    longitude: number;
    timezone: string;
  };
}
