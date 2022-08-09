import { loadHotelsInfo } from "./load-hotels-info";
import * as api from "./api";

const mockedApi = api as jest.Mocked<typeof api>;

jest.mock("./api", () => ({
  fetchHotels: jest.fn(),
  fetchRoomsByHotelId: jest.fn(),
}));

describe("loadHotelsInfo", () => {
  test("fetchHotels called", async () => {
    mockedApi.fetchHotels.mockReturnValueOnce([] as any);

    await loadHotelsInfo();

    expect(mockedApi.fetchHotels).toBeCalled();
  });

  test("fetchRoomsByHotelId called correct times", async () => {
    mockedApi.fetchHotels.mockReturnValueOnce([
      { id: "1" },
      { id: "2" },
      { id: "3" },
    ] as any);

    await loadHotelsInfo();
    expect(mockedApi.fetchRoomsByHotelId).toBeCalledTimes(3);
  });

  test("Maps data correctly", async () => {
    mockedApi.fetchHotels.mockReturnValueOnce([
      { id: "hotel1" },
      { id: "hotel2" },
      { id: "hotel3" },
    ] as any);

    mockedApi.fetchRoomsByHotelId.mockImplementation(
      (hotelId) =>
        [{ id: `${hotelId}-room1` }, { id: `${hotelId}-room2` }] as any
    );

    const result = await loadHotelsInfo();

    expect(result).toEqual([
      {
        id: "hotel1",
        rooms: [{ id: "hotel1-room1" }, { id: "hotel1-room2" }],
      },
      {
        id: "hotel2",
        rooms: [{ id: "hotel2-room1" }, { id: "hotel2-room2" }],
      },
      {
        id: "hotel3",
        rooms: [{ id: "hotel3-room1" }, { id: "hotel3-room2" }],
      },
    ]);
  });
});
