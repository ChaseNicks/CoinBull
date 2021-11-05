const SingleCoin = (coin) => {
  const { logo_url } = coin;
  return (
    <div>
      <img src={logo_url} alt={logo_url} />
    </div>
  );
};

export default SingleCoin;
