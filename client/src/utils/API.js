import axios from "axios";

const nomicsURL = `https://api.nomics.com/v1/currencies/ticker?key=001b0fad7295e9be8c2270792dcc4efb3763624e&interval=1d,30d&convert=USD&per-page=100&page=1`;
export async function getAllCoins() {
  const res = await axios.get(nomicsURL);
  const coins = res.data;
  return coins;
}

const singleLunarURL = `https://api.lunarcrush.com/v2?data=assets&key=axnpldsftoa03n17z75cy5r&symbol=BTC&interval=day&time_series_indicators=open,close,high,volume,low&data_points=90`;
export async function getASingleCoin() {
  const res = await axios.get(singleLunarURL);
  const coin = res.data;
  return coin;
}
// Gets news from Lunarcrush
export async function getNews(symbol) {
  const res = await axios.get(
    `https://api.lunarcrush.com/v2?data=feeds&key=axnpldsftoa03n17z75cy5r&symbol=${symbol}&limit=10&sources=news`
  );
  const news = res.data;
  return news;
}

export async function getCoin(ticker) {
  if (ticker) {
    const res = await axios.get(
      `https://api.nomics.com/v1/currencies/ticker?key=001b0fad7295e9be8c2270792dcc4efb3763624e&ids=${ticker}&convert=USD&page=1`
    );
    const coin = res.data;
    return coin;
  }
}

