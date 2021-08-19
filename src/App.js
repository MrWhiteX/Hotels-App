import React, { useState, useEffect } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Jumbo from "./components/Jumbo/Jumbo";
import Searchbar from "./components/Searchbar/Searchbar";
import Hotels from "./components/Hotels/Hotels";
import Footer from "./components/Footer/Footer";
import AuthContext from "./components/context/authContext";

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
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setHotels(allHotels);
    setLoading(false);
  }, []);

  const searchHandler = (term) => {
    const hotels = [...allHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    setHotels(hotels);
  };
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuthenticated,
          login: () => setIsAuthenticated(true),
          logout: () => setIsAuthenticated(false),
        }}
      >
        <Header />
        <Menu />
        <Jumbo>
          <Searchbar onSearch={(term) => searchHandler(term)} />
        </Jumbo>
        <Hotels hotels={hotels} loading={loading} />
        <Footer />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
