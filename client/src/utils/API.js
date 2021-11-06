import axios from "axios";

const endpoint = `https://api.nomics.com/v1/currencies/ticker?key=afc490f6119aa8022118a2f5727f19629736d2e8&interval=1d,30d&convert=USD&per-page=100&page=1`;
export async function getAllCoins() {
  const res = await axios.get(endpoint);
  const cryptos = res.data;
  return cryptos;
}
