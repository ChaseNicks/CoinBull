export const getFavoriteCoinsIds = () => {
  const favoriteCoinsIds = localStorage.getItem("favorite_coins")
    ? JSON.parse(localStorage.getItem("favorite_coins"))
    : [];

  return favoriteCoinsIds;
};
