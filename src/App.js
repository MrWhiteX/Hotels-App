import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Jumbo from "./components/Jumbo/Jumbo";
import Hotels from "./components/Hotels/Hotels";
import Footer from "./components/Footer/Footer";

const allHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 2,
    name: "Staropolski",
    city: "Wrocław",
    price: "110 zł/doba",
    image: "",
  },
  {
    id: 3,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 4,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 5,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
  {
    id: 6,
    name: "Pod akacjami",
    city: "Warszawa",
    price: "130 zł/doba",
    image: "",
  },
];

const App = () => {
  const [state, setState] = useState({
    hotels: allHotels,
  });

  const searchHandler = (term) => {
    console.log(`Szukam z app ${term}`);
    const hotels = [...allHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    setState({ hotels });
  };
  return (
    <div className="App">
      <Header />
      <Menu />
      <Jumbo onSearch={(term) => searchHandler(term)} />
      <Hotels hotels={state.hotels} />
      <Footer />
    </div>
  );
};

export default App;
