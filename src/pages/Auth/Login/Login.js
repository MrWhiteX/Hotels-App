import React, { useState } from "react";
import { Link } from "react-router-dom";
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

export default function Login(props) {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("accounts:signInWithPassword", {
        email,
        password,
        returnSecureToken: true,
      });
      setAuth({
        email: res.data.email,
        token: res.data.idToken,
        userId: res.data.localId,
      });
      history.push("/");
    } catch (ex) {
      setLoading(false);
      setPassword("");
      switch (ex.response.data.error.message) {
        case "INVALID_PASSWORD":
          setError("Niepoprawne hasło");
          break;
        case "EMAIL_NOT_FOUND":
          setError("Brak konta o podanym adresie email");
          break;
        default:
          setError("Nieoczekiwany błąd skontaktuj się z biurem obsługi");
      }
    }
  };

  if (auth) {
    history.push("/");
  }

  return (
    <div className="login container">
      <h1>Wpisz dane,aby się zalogować</h1>
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
          className="single__field"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
        />
        <TextField
          className="single__field"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Hasło"
          variant="outlined"
        />
        <div className="">
          <LoadingButton loading={loading} label={"Zaloguj"} />
        </div>
      </form>

      <div className="createaccount_message">
        <p className="">Nie posiadasz konta w naszym serwisie? Stwórz je!</p>

        <Link to="/zarejestruj">Zarejestruj</Link>
      </div>
    </div>
  );
}
