import React, { useRef, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
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
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    city: "",
    rooms: 1,
    description: "",
    features: [],
    image: null,
    status: 0,
  });
  const imageRef = useRef();
  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

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

  return (
    <section className=" container">
      <div className="profile__title breadcrumb">
        <PersonIcon
          style={{ fontSize: 30, marginLeft: "7px", color: "#FF9F1C" }}
        />
        <h1>Nowy Hotel</h1>
      </div>
      <div className="addhotel__wrapper">
        <form className={classes.root} autoComplete="off" onSubmit={submit}>
          <div>
            <TextField
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              id="outlined-basic"
              label="Nazwa hotelu"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              id="outlined-basic"
              label="Miejscowość"
              variant="outlined"
            />
          </div>
          <div className="">
            <div>
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
                    value="parking"
                    onChange={changeFeatureHandler}
                    checked={form.features.find((x) => x === "parking")}
                    color="secondary"
                  />
                </label>
                <label>
                  WiFi
                  <Checkbox
                    name="checkedB"
                    value="wifi"
                    onChange={changeFeatureHandler}
                    checked={form.features.find((x) => x === "wifi")}
                    color="secondary"
                  />
                </label>
                <label>
                  Pokój dla palących
                  <Checkbox
                    name="checkedB"
                    value="smoke"
                    onChange={changeFeatureHandler}
                    checked={form.features.find((x) => x === "smoke")}
                    color="secondary"
                  />
                </label>
                <label>
                  Pokój ze zwierzętami
                  <Checkbox
                    name="checkedB"
                    value="pet"
                    onChange={changeFeatureHandler}
                    checked={form.features.find((x) => x === "pet")}
                    color="secondary"
                  />
                </label>
              </div>
            </div>
            <div className="image">
              <h2>Zdjęcie</h2>{" "}
              <input
                type="file"
                ref={imageRef}
                onChange={(e) => setForm({ ...form, image: e.target.files })}
              />
            </div>
            <div className="active">
              <h3>Status</h3>
              <FormControl component="fieldset">
                <RadioGroup>
                  <FormControlLabel
                    value="1"
                    checked={form.status == 1}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                    control={<Radio />}
                    label="Aktywny"
                  />
                  <FormControlLabel
                    value="0"
                    checked={form.status == 0}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
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
              label={"Dodaj hotel"}
            ></LoadingButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddHotel;
