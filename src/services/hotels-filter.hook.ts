import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { loadHotelsInfo } from "services/load-hotels-info";
import { HotelWithRoomsModel } from "types/HotelWithRoomsModel";

export const useHotelsFilter = () => {
  const hotelsQuery = useQuery(["hotels-info"], loadHotelsInfo);

  const [minRating, setMinRating] = useState<number | null>(null);
  const [adultsMinAmount, setAdultsMinAmount] = useState<number>(0);
  const [childrenMinAmount, setChildrenMinAmount] = useState<number>(0);

  const hotels = useMemo(() => {
    const filtered: HotelWithRoomsModel[] = [];

    for (const hotel of hotelsQuery.data ?? []) {
      if (!minRating || +hotel.starRating >= minRating) {
        const rooms = hotel.rooms.filter((room) => {
          const { maxChildren, maxAdults } = room.occupancy;
          return (
            maxChildren >= childrenMinAmount && maxAdults >= adultsMinAmount
          );
        });

        if (rooms.length > 0) {
          filtered.push({ ...hotel, rooms });
        }
      }
    }

    return filtered;
  }, [minRating, adultsMinAmount, childrenMinAmount, hotelsQuery.data]);

  return {
    isLoading: hotelsQuery.isLoading,
    isError: hotelsQuery.isError,
    hotels,
    minRating,
    setMinRating,
    adultsMinAmount,
    setAdultsMinAmount,
    childrenMinAmount,
    setChildrenMinAmount,
  };
};
