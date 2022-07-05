const TrendingCrypto = ({ price, name }) => {
  return (
    <a href={`/home/${name}`}>
      <div className="trending-list">
        <img
          className="trending-logo"
          src={require(`../images/crypto-logo/${name}.png`)}
          alt=""
        />
        <p className="trending-name">{name}</p>
        <p>${price}</p>
      </div>
    </a>
  );
};

export default TrendingCrypto;
