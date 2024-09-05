import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;

const UNSPLASH_ROOT = "https://api.unsplash.com";

interface ImageDetails {
  id: string;
  slug: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
  };
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  breadcrumbs: Array<any>;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: Array<any>;
  sponsorship: any | null;
  topic_submissions: {
    [key: string]: any;
  };
  asset_type: string;
}

export const getPhotosByQuery = async ({ query }: { query: string }) => {
  const { data }: { data: { results: ImageDetails[] } } = await axios.get(
    `${UNSPLASH_ROOT}/search/photos?query="${encodeURIComponent(
      query,
    )}"&client_id=${clientId}&w=100&h=70&page=1&per_page=1`,
  );
  return data;
};
