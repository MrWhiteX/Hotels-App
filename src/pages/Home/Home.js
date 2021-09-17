import React, { useState, useEffect } from "react";
import Hotels from "../../components/Hotels/Hotels";
import useStateStorage from "../../hooks/useStateStorage";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import axios from "../../axios";
import { objectToArrayWithId } from "../../helpers/objects";

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

  const fetchHotels = async () => {
    try {
      const res = await axios.get("/hotels.json");
      const newHotel = objectToArrayWithId(res.data).filter(
        (hotel) => hotel.status === "1"
      );
      setHotels(newHotel);
    } catch (ex) {
      console.log(ex.response);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchHotels();
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
