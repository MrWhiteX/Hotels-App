import React, { useState, useEffect } from "react";
import LoadingButton from "../../../components/UI/LoadingIcon/LoadingButton/LoadingButton";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../axios-auth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ProfileDetails = () => {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState(auth.email);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const classes = useStyles();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setLoading(false);
    setPassword("");

    try {
      const data = {
        idToken: auth.token,
        email: email,
        returnSecureToken: true,
      };

      if (password) {
        data.password = password;
      }
      const res = await axios.post("accounts:update", data);
      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId,
      });
      setSuccess(true);
    } catch (ex) {
      console.log(ex.response);
    }
  };

  useEffect(() => {
    if (password.length >= 6 || !password) {
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Wymagane 6 znaków" });
    }
  }, [password]);

  return (
    <div className="profile__details">
      <h1>Zaaktualizuj swoje dane:</h1>
      {success ? (
        <div>
          <Alert
            severity="success"
            style={{ fontSize: "1.4rem", marginTop: 15, marginBottom: 15 }}
          >
            Dane zaaktualizowane!
          </Alert>
        </div>
      ) : null}
      <form className={classes.root} autoComplete="off" onSubmit={submit}>
        <TextField
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          helperText={
            errors.email ? (
              <p style={{ fontSize: "1rem", color: "red" }}>
                Niepoprawny adres email
              </p>
            ) : null
          }
        />

        <TextField
          // required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Hasło"
          variant="outlined"
          helperText={
            errors.password ? (
              <span
                style={{ fontSize: "1rem", color: "red", position: "absolute" }}
              >
                Wymagane 6 znaki
              </span>
            ) : null
          }
        />
        <div className="">
          <LoadingButton loading={loading} label={"Zapisz"} />
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
