import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import Hotels from "../../components/Hotels/Hotels";
import useStateStorage from "../../hooks/useStateStorage";
import ReducerContext from "../../components/context/reducerContext";

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

const Home = () => {
  const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null);

  const reducer = useContext(ReducerContext);

  const openHotel = (hotel) => {
    setLastHotel(hotel);
  };

  const removeLastHotel = () => {
    console.log(`klikam remove z app`);
    setLastHotel(null);
  };

  useEffect(() => {
    setInterval(() => {
      reducer.dispatch({ type: "set-hotels", hotels: allHotels });
      reducer.dispatch({ type: "set-loading", loading: false });
    }, 1000);
  }, []);

  return (
    <>
      <Hotels
        onOpen={openHotel}
        hotels={reducer.state.hotels}
        loading={reducer.state.loading}
        lastHotel={lastHotel}
        onRemove={removeLastHotel}
      />
    </>
  );
};

export default Home;
