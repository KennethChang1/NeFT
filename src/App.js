import TradingPage from "./component/TradingPage";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Application from "./pages/Application";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <p>sfksdfj</p>
        <Switch>
          <Route exact path="/">
            <div className="home">
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </div>
          </Route>
          <Route exact path="/home">
            <Application></Application>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
