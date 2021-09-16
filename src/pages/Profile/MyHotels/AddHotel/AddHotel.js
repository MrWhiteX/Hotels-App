import React, { useRef, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";
import LoadingButton from "../../../../components/UI/LoadingIcon/LoadingButton/LoadingButton";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Checkbox,
  TextareaAutosize,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import axios from "../../../../axios";
import useAuth from "../../../../hooks/useAuth";
import HotelForm from "../HotelForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

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
