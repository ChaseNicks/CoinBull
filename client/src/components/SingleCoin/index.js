const SingleCoin = (coin) => {
  const { logo_url } = coin;
  return (
    <a class="panel-block" href={logo_url}>
      <img width="50px" src={logo_url} alt={logo_url} />
    </a>
  );
};

export default SingleCoin;
