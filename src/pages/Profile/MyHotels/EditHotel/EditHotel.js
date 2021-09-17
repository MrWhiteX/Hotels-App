import React, { useEffect, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";
import axios from "../../../../axios";
import { useParams } from "react-router-dom";
import HotelForm from "../HotelForm";

const EditHotel = () => {
  const { id } = useParams();
  const history = useHistory();
  const [hotel, setHotel] = useState(null);

  const submit = async (form) => {
    await axios.put(`/hotels/${id}.json`, form);
    history.push("/profil/hotele");
  };

  const fetchHotel = async () => {
    const res = await axios.get(`/hotels/${id}.json`);
    setHotel(res.data);
  };

  useEffect(() => {
    fetchHotel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className=" container">
      <div className="profile__title breadcrumb">
        <PersonIcon
          style={{ fontSize: 30, marginLeft: "7px", color: "#FF9F1C" }}
        />
        <h1>Edytuj Hotel</h1>
      </div>
      <div className="addhotel__wrapper">
        {/* FORM HERE */}
        <HotelForm buttonText="Zapisz" onSubmit={submit} hotel={hotel} />
      </div>
    </section>
  );
};

export default EditHotel;
