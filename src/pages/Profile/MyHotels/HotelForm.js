import React, { useState, useEffect } from "react";
import LoadingButton from "../../../components/UI/LoadingIcon/LoadingButton/LoadingButton";
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
// import axios from "../../../axios";
import useAuth from "../../../hooks/useAuth";

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

const HotelForm = (props) => {
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    city: "",
    price: 0,
    rooms: 1,
    description: "",
    features: [],
    image: null,
    status: 0,
  });

  const classes = useStyles();
  const changeFeatureHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      const newFeatures = [...form.features, value];
      setForm({ ...form, features: newFeatures });
    } else {
      const newFeatures = form.features.filter((x) => x !== value);
      setForm({ ...form, features: newFeatures });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      props.onSubmit({
        name: form.name,
        city: form.city,
        price: form.price,
        rooms: form.rooms,
        description: form.description,
        features: form.features,
        status: form.status,
        userId: auth.userId,
      });
    } catch (ex) {
      console.log(ex.response);
    }

    setLoading(false);
  };

  useEffect(() => {
    const newForm = { ...form };
    for (const key in props.hotel) {
      newForm[key] = props.hotel[key];
    }
    setForm(newForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.hotel]);

  return (
    <>
      <form className={classes.root} autoComplete="off" onSubmit={submit}>
        <div className="single__field">
          <TextField
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            id="outlined-basic"
            label="Nazwa hotelu"
            variant="outlined"
          />
        </div>

        <div className="single__field">
          <TextField
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            id="outlined-basic"
            label="Miejscowość"
            variant="outlined"
          />
        </div>
        <div className="single__field">
          <TextField
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            id="outlined-basic"
            label="Cena"
            variant="outlined"
          />
        </div>
        <div>
          <div className="single__field">
            <TextField
              required
              value={form.rooms}
              onChange={(e) => setForm({ ...form, rooms: e.target.value })}
              id="outlined-basic"
              label="Ilość pokoi"
              variant="outlined"
            />
          </div>

          <div>
            <TextareaAutosize
              required
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              minRows={9}
              cols={35}
              placeholder="Wprowadz opis hotelu"
            />
          </div>

          <div className="facilities">
            <h1>Udogodnienia</h1>
            <div className="facilities__option ">
              <label>
                Parking
                <Checkbox
                  name="checkedB"
                  value="Parking"
                  onChange={changeFeatureHandler}
                  checked={form.features.find((x) => x === "Parking")}
                  color="secondary"
                />
              </label>
              <label>
                WiFi
                <Checkbox
                  name="checkedB"
                  value="WiFi"
                  onChange={changeFeatureHandler}
                  checked={form.features.find((x) => x === "WiFi")}
                  color="secondary"
                />
              </label>
              <label>
                Pokój dla palących
                <Checkbox
                  name="checkedB"
                  value="Można palić papierosy"
                  onChange={changeFeatureHandler}
                  checked={form.features.find(
                    (x) => x === "Można palić papierosy"
                  )}
                  color="secondary"
                />
              </label>
              <label>
                Pokój ze zwierzętami
                <Checkbox
                  name="checkedB"
                  value="Zabierz zwierzaka"
                  onChange={changeFeatureHandler}
                  checked={form.features.find((x) => x === "Zabierz zwierzaka")}
                  color="secondary"
                />
              </label>
            </div>
          </div>
          <div className="image">
            <h2>Zdjęcie</h2>{" "}
            <input
              type="file"
              //   ref={imageRef}
              onChange={(e) => setForm({ ...form, image: e.target.files })}
            />
          </div>
          <div className="active">
            <h3>Status</h3>
            <FormControl component="fieldset">
              <RadioGroup>
                <FormControlLabel
                  value="1"
                  checked={form.status === "1"}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  control={<Radio />}
                  label="Aktywny"
                />
                <FormControlLabel
                  value="0"
                  checked={form.status === "0"}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  control={<Radio />}
                  label="Ukryty"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div>
          <LoadingButton
            loading={loading}
            label={`${props.buttonText}`}
          ></LoadingButton>
        </div>
      </form>
    </>
  );
};

export default HotelForm;
