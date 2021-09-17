import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";
import axios from "../../../../axios";
import HotelForm from "../HotelForm";

const AddHotel = () => {
  const history = useHistory();
  const submit = async (form) => {
    await axios.post("/hotels.json", form);
    history.push("/profil/hotele");
  };
  return (
    <section className=" container">
      <div className="profile__title breadcrumb">
        <PersonIcon
          style={{ fontSize: 30, marginLeft: "7px", color: "#FF9F1C" }}
        />
        <h1>Nowy Hotel</h1>
      </div>
      <div className="addhotel__wrapper">
        <HotelForm buttonText="Dodaj" onSubmit={submit} />
      </div>
    </section>
  );
};

export default AddHotel;
