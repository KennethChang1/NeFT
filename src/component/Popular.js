import TrendingCrypto from "./TrendingCrypto";
const Popular = ({ price }) => {
  const array = [];
  for (const key in price) {
    array.push({ name: key, price: price[key].usd });
  }

  return (
    <section className="card">
      <h2 className="card__title">Top cryptocurrencies</h2>
      {array.map((item, index) => {
        return (
          <TrendingCrypto
            price={item.price}
            name={item.name}
            key={index}
          ></TrendingCrypto>
        );
      })}
    </section>
  );
};

export default Popular;
