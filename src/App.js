import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Application from "./pages/Application";
import Trading from "./pages/Trading.js";
import NavbarApp from "./component/application/NavbarApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cpolkadot%2Cethereum%2Cchainlink%2Ccardano&vs_currencies=usd&include_24hr_change=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setPrice(data);
      });
  }, []);

  return (
    <Router basename="/NeFT">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="home">
              <Navbar></Navbar>
              {price && <Home price={price}></Home>}
              <Footer></Footer>
            </div>
          </Route>
          <Route exact path="/NeFT/home">
            {price && <Application price={price}></Application>}
          </Route>
          <Route exact path="/home/:name">
            <NavbarApp></NavbarApp>
            {price && <Trading price={price}></Trading>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
