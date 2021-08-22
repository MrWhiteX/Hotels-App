import React, { useEffect, useReducer } from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Jumbo from "./components/Jumbo/Jumbo";
import Searchbar from "./components/Searchbar/Searchbar";
import Hotels from "./components/Hotels/Hotels";
import Footer from "./components/Footer/Footer";
import AuthContext from "./components/context/authContext";
import useStateStorage from "./hooks/useStateStorage";

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

const reducer = (state, action) => {
  switch (action.type) {
    case "set-hotels":
      return { ...state, hotels: action.hotels };

    case "set-loading":
      return { ...state, loading: action.loading };
    case "login":
      return { ...state, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false };

    default:
      throw new Error("Nie ma takiej akcji: " + action.type);
  }
};
const initialState = {
  hotels: [],
  loading: true,
  isAuthenticated: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null);

  useEffect(() => {
    dispatch({ type: "set-hotels", hotels: allHotels });
    dispatch({ type: "set-loading", loading: false });
  }, []);

  const searchHandler = (term) => {
    const newHotels = [...allHotels].filter((x) =>
      x.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: "set-hotels", hotels: newHotels });
  };

  const openHotel = (hotel) => {
    setLastHotel(hotel);
    console.log("clicked", hotel);
  };

  const removeLastHotel = () => {
    console.log(`klikam remove z app`);
    setLastHotel(null);
  };

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          login: () => dispatch({ type: "login" }),
          logout: () => dispatch({ type: "logout" }),
        }}
      >
        <Header />
        <Menu />
        <Jumbo>
          <Searchbar onSearch={(term) => searchHandler(term)} />
        </Jumbo>
        <Hotels
          onOpen={openHotel}
          hotels={state.hotels}
          loading={state.loading}
          lastHotel={lastHotel}
          onRemove={removeLastHotel}
        />
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
