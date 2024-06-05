import { GiphyFetch } from "@giphy/js-fetch-api";
import { VITE_GIPHY_APIKEY } from "../config";

const gf = new GiphyFetch(VITE_GIPHY_APIKEY);

export async function searchGifByWord(word) {
  const { data } = await gf.search(word, {
    sort: "relevant",
    lang: "es",
    limit: 10,
  });
  return data;
}
