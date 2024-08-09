import { ListingElement } from "@/types/zap";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetJson = () => {
  const {
    data: json,
    isFetching: isFetchingJson,
    refetch: refetchJson,
  } = useQuery({
    queryKey: ["get-Json"],
    queryFn: async (): Promise<ListingElement[] | null> => {
      const { data }: { data: ListingElement[] } = await axios.get(
        `http://localhost:3000/zap/json`
      );
      if (!data) {
        return null;
      }

      return data;
    },
  });

  return { json, isFetchingJson, refetchJson };
};
