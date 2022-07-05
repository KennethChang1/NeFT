import { useParams } from "react-router-dom";
import { TradingViewStockChartWidget } from "react-tradingview-components";
import { useState, useId } from "react";
import { set } from "react-hook-form";
const Trading = ({ price }) => {
  const params = useParams();
  const { name } = params;
  const cryptoTicker = {
    bitcoin: {
      ticker: "btc",
    },

    ethereum: {
      ticker: "eth",
    },

    cardano: {
      ticker: "ada",
    },

    polkadot: {
      ticker: "dot",
    },

    chainlink: {
      ticker: "link",
    },
  };
  const { ticker } = cryptoTicker[name];
  const { usd, usd_24h_change: change } = price[name];
  const [input, setInput] = useState("");
  const id = useId();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="trading-wrapper">
      <div className="trading-header">
        <p className="ticker-title">{ticker}/USD</p>
        <p>${usd}</p>
        <p className={change > 0 ? "price-up" : "price-down"}>
          {change.toFixed(2)}%
        </p>
      </div>
      <div>
        <TradingViewStockChartWidget
          symbol={`${ticker}usd`}
          theme="Light"
          range="12m"
          width="100%"
          height={300}
        />
      </div>
      <div className="orderform">
        <h2 className="orderform-title">Swap</h2>
        <div className="orderform-wrapper">
          <label htmlFor={id}>USD</label>
          <input
            className="orderform-input"
            type="number"
            placeholder="0"
            id={id}
            onInput={(e) => {
              handleInput(e);
            }}
          />
          <label htmlFor="">{name}</label>
          <input
            className="orderform-input"
            type="number"
            value={input / usd}
          />
          <button className="btn btn--primary">Swap</button>
        </div>
      </div>
    </div>
  );
};

export default Trading;
