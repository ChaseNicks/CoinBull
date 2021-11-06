import axios from "axios";

const nomicsURL = `https://api.nomics.com/v1/currencies/ticker?key=afc490f6119aa8022118a2f5727f19629736d2e8&interval=1d,30d&convert=USD&per-page=100&page=1`;
export async function getAllCoins() {
  const res = await axios.get(nomicsURL);
  const coins = res.data;
  return coins;
}

// Gets news from Lunarcrush
const newsURL = `https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&limit=10&sources=news`;
export async function getNews() {
  const res = await axios.get(newsURL);
  const news = res.data;
  return news;
}