import Header from "../component/Header";
import Popular from "../component/Popular";
import Article from "../component/Article";
const Home = () => {
  return (
    <main>
      <Header></Header>
      <Popular></Popular>
      <div className="card card--center">
        <h3 className="card__title card__title--featured">NeFT features</h3>
        <Article
          image="buy"
          title="Trade cryptocurrencies"
          copy="To begin trading cryptocurrency, fund your cryptocurrency wallet. You
        can add funds using a variety of payment methods."
        ></Article>
        <Article
          image="stake"
          title="Stake your crypto"
          copy="By staking your assets with NeFT, you can earn up to 15% in annual rewards. Staking takes merely a few clicks."
        ></Article>
      </div>
    </main>
  );
};

export default Home;
