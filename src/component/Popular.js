import TrendingCrypto from "./TrendingCrypto";
import { useState, useEffect } from "react";
const Popular = () => {
  const [price, setPrice] = useState(null);
  const array = [];

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cchainlink%2Cpolkadot&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then((data) => {
        setPrice(data);
      });
  }, []);

  for (const key in price) {
    array.push({ name: key, price: price[key].usd });
  }

  return (
    <section className="card">
      <h2 className="card__title">Trending cryptocurrencies</h2>
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
