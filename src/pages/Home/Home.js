import React, { useState, useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import Hotels from "../../components/Hotels/Hotels";
import useStateStorage from "../../hooks/useStateStorage";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

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
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null);

  const openHotel = (hotel) => {
    setLastHotel(hotel);
  };

  const removeLastHotel = () => {
    setLastHotel(null);
  };

  useEffect(() => {
    setTimeout(() => {
      setHotels(allHotels);
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <LoadingIcon />
  ) : (
    <Hotels
      onOpen={openHotel}
      hotels={hotels}
      loading={loading}
      lastHotel={lastHotel}
      onRemove={removeLastHotel}
    />
  );
};

export default Home;
