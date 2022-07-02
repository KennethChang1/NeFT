import TradingPage from "./component/TradingPage";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="App">
      <div className="home">
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
