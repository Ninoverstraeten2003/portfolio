import { getPhotosByQuery } from "@/app/api/unsplash";
import { useQuery } from "@tanstack/react-query";

export const useGetPhotosByQuery = ({ query }: { query: string }) =>
  useQuery({
    queryKey: ["photos", query],
    queryFn: () => getPhotosByQuery({ query }),
  });
