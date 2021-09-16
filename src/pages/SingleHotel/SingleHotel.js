import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import axios from "../../axios";

const SingleHotel = () => {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const setTitle = useWebsiteTitle("Fajny Hotelik");

  const fetchHotel = async () => {
    try {
      const res = await axios.get(`/hotels/${id}.json`);
      setHotel(res.data);
    } catch (ex) {
      console.log(ex.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  if (loading) return <LoadingIcon />;
  return <div>Hotel: {hotel.name}</div>;
};

export default SingleHotel;
