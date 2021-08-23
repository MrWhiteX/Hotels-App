import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

const SingleHotel = () => {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchHotel = () => {
    setHotel({
      id: 2,
      name: "Staropolski",
      city: "Wrocław",
      price: "110 zł/doba",
      image: "",
    });
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchHotel();
    }, 500);
  }, []);

  if (loading) return <LoadingIcon />;
  return <div>Hotel: {hotel.name}</div>;
};

export default SingleHotel;
