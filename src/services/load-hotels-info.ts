import { HotelWithRoomsModel } from "types/HotelWithRoomsModel";
import { RoomModel } from "types/RoomModel";
import * as api from "services/api";

export const loadHotelsInfo = async () => {
  const hotels = await api.fetchHotels();

  const hotelIdToRoomsMap: Record<string, RoomModel[]> = {};

  const loadRooms = hotels.map(async (hotel) => {
    const rooms = await api.fetchRoomsByHotelId(hotel.id);
    hotelIdToRoomsMap[hotel.id] = rooms;
  });

  await Promise.all(loadRooms);

  const hotelsWithRooms: HotelWithRoomsModel[] = hotels.map((hotel) => ({
    ...hotel,
    rooms: hotelIdToRoomsMap[hotel.id] ?? [],
  }));

  return hotelsWithRooms;
};
