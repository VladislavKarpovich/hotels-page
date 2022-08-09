import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, act } from "@testing-library/react-hooks";
import { useHotelsFilter } from "./hotels-filter.hook";
import * as loadHotelsInfoModule from "./load-hotels-info";

const mockedLoadHotelsInfoModule = loadHotelsInfoModule as jest.Mocked<
  typeof loadHotelsInfoModule
>;

const mockedData = [
  {
    starRating: "3",
    rooms: [
      {
        occupancy: {
          maxChildren: 1,
          maxAdults: 5,
        },
      },
    ],
  },
  {
    starRating: "4",
    rooms: [
      {
        occupancy: {
          maxChildren: 5,
          maxAdults: 1,
        },
      },
    ],
  },
  {
    starRating: "5",
    rooms: [
      {
        occupancy: {
          maxChildren: 1,
          maxAdults: 1,
        },
      },
    ],
  },
];

const queryClient = new QueryClient();

jest.mock("./load-hotels-info", () => ({
  loadHotelsInfo: jest.fn(),
}));

const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useHotelsFilter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Returns data", async () => {
    mockedLoadHotelsInfoModule.loadHotelsInfo.mockReturnValue(
      mockedData as any
    );

    const { result, waitFor } = renderHook(() => useHotelsFilter(), {
      wrapper,
    });

    await waitFor(() => result.current.hotels.length > 0);

    expect(mockedLoadHotelsInfoModule.loadHotelsInfo).toBeCalled();
    expect(result.current.hotels).toEqual(mockedData);
  });

  test("Filters by rating", async () => {
    mockedLoadHotelsInfoModule.loadHotelsInfo.mockReturnValue(
      mockedData as any
    );

    const { result, waitFor } = renderHook(() => useHotelsFilter(), {
      wrapper,
    });

    await waitFor(() => result.current.hotels.length > 0);

    act(() => {
      result.current.setMinRating(5);
    });

    expect(result.current.hotels).toEqual([
      {
        starRating: "5",
        rooms: [
          {
            occupancy: {
              maxChildren: 1,
              maxAdults: 1,
            },
          },
        ],
      },
    ]);
  });

  test("Filters by adults min amount", async () => {
    mockedLoadHotelsInfoModule.loadHotelsInfo.mockReturnValue(
      mockedData as any
    );

    const { result, waitFor } = renderHook(() => useHotelsFilter(), {
      wrapper,
    });

    await waitFor(() => result.current.hotels.length > 0);

    act(() => {
      result.current.setAdultsMinAmount(5);
    });

    expect(result.current.hotels).toEqual([
      {
        starRating: "3",
        rooms: [
          {
            occupancy: {
              maxChildren: 1,
              maxAdults: 5,
            },
          },
        ],
      },
    ]);
  });

  test("Filters with combined filter", async () => {
    mockedLoadHotelsInfoModule.loadHotelsInfo.mockReturnValue(
      mockedData as any
    );

    const { result, waitFor } = renderHook(() => useHotelsFilter(), {
      wrapper,
    });

    await waitFor(() => result.current.hotels.length > 0);

    act(() => {
      result.current.setMinRating(4);
      result.current.setChildrenMinAmount(3);
    });

    expect(result.current.hotels).toEqual([
      {
        starRating: "4",
        rooms: [
          {
            occupancy: {
              maxChildren: 5,
              maxAdults: 1,
            },
          },
        ],
      },
    ]);
  });
});
