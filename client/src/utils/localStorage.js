export const getFavoriteCoinsIds = () => {
  const favoriteCoinsIds = localStorage.getItem("favorite_coins")
    ? JSON.parse(localStorage.getItem("favorite_coins"))
    : [];

  return favoriteCoinsIds;
};

export const favoriteCoinsIds = (coinIdArr) => {
  if (coinIdArr.length) {
    localStorage.setItem("favorite_coins", JSON.stringify(coinIdArr));
  } else {
    localStorage.removeItem("favorite_coins");
  }
};
