import { getPhotosByQuery } from "@/app/api/unsplash";
import { useQuery } from "@tanstack/react-query";

const staleTime = 1000 * 60 * 60 * 2;

export const useGetPhotosByQuery = ({ query }: { query: string }) =>
	useQuery({
		queryKey: ["photos", query],
		queryFn: () => getPhotosByQuery,
		staleTime,
	});
