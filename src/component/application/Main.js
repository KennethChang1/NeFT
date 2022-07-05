import Popular from "../Popular";
const Main = ({ price }) => {
  return (
    <main>
      <div className="card home-header-wrapper">
        <p className="balance-title">Total Balance</p>
        <p>$ 0.00</p>
        <div className="balance-btn-wrapper">
          <a className="btn btn--balance" href="#">
            Trade
          </a>
          <a className="btn btn--balance" href="#">
            Transfer
          </a>
          <a className="btn btn--balance" href="#">
            Stake
          </a>
        </div>
      </div>
      <div className="home-main-wrapper">
        <Popular price={price}></Popular>
      </div>
    </main>
  );
};

export default Main;
