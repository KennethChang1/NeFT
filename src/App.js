import TradingPage from "./component/TradingPage";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
