import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;

const UNSPLASH_ROOT = "https://api.unsplash.com";

export const getPhotosByQuery = async ({ query }: { query: string }) => {
	const { data } = await axios.get(
		`${UNSPLASH_ROOT}/search/photos?query="${encodeURIComponent(
			query
		)}"&client_id=${clientId}&w=100&h=70&page=1&per_page=1`
	);
	return data;
};
