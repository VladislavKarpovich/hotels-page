import { HotelModel } from "./HotelModel";
import { RoomModel } from "./RoomModel";

export interface HotelWithRoomsModel extends HotelModel {
  rooms: RoomModel[];
}