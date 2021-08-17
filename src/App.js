import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Jumbo from "./components/Jumbo/Jumbo";
import Hotels from "./components/Hotels/Hotels";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Jumbo />
      <Hotels />
      <Footer />
    </div>
  );
}

export default App;
