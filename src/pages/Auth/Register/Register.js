import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import LoadingButton from "../../../components/UI/LoadingIcon/LoadingButton/LoadingButton";
import TextField from "@material-ui/core/TextField";
import axios from "../../../axios-auth";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  validmsg: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Register(props) {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(null);
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("accounts:signUp", {
        email,
        password,
        returnSecureToken: true,
      });

      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.localId,
      });
      history.push("/");
    } catch (ex) {
      console.log(ex.response);

      switch (ex.response.data.error.message) {
        case "WEAK_PASSWORD : Password should be at least 6 characters":
          setError("Zbyt słabe hasło - powinno zawierać conajmniej 6 znaków");
          break;
        case "EMAIL_EXISTS":
          setError("Ten email już istnieje");
          break;
        default:
          setError("Nieoczekiwany błąd skontaktuj się z biurem obsługi");
      }
    }

    setLoading(false);
  };

  return (
    <div className="login container">
      <h1>Wpisz dane,aby zarejestrować</h1>
      {error ? (
        <div>
          <Alert
            severity="error"
            style={{ fontSize: "1.2rem", marginTop: 15, marginBottom: 15 }}
          >
            {error}
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
        />
        <TextField
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Hasło"
          variant="outlined"
        />
        <div className="">
          <LoadingButton loading={loading} label={"Rejestruj"} />
        </div>
      </form>
    </div>
  );
}
