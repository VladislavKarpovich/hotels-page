import { HotelModel } from "types/HotelModel";
import { RoomModel } from "types/RoomModel";

export const fetchHotels = async () => {
  const url = "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";

  const response = await fetch(url);
  const parsedJson = await response.json();

  const data = parsedJson as HotelModel[];

  return data;
};

export const fetchRoomsByHotelId = async (hotelId: string) => {
  const url = `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`;

  const response = await fetch(url);
  const parsedJson = await response.json();

  const data = parsedJson.rooms as RoomModel[];

  return data;
};


