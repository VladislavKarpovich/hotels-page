import * as api from "./api";

describe("API", () => {
  test("fetchHotels", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve([]),
      }) as any;
    });

    const result = await api.fetchHotels();

    expect(fetchMock).toHaveBeenCalledWith(
      "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
    );

    expect(result).toEqual([]);

    fetchMock.mockReset();
  });

  test("fetchRoomsByHotelId", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ rooms: [] }),
      }) as any;
    });

    const result = await api.fetchRoomsByHotelId("test-id");

    expect(fetchMock).toHaveBeenCalledWith(
      "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/test-id"
    );

    expect(result).toEqual([]);

    fetchMock.mockReset();
  });
});
