import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import LoadingButton from "../../../components/UI/LoadingIcon/LoadingButton/LoadingButton";
import TextField from "@material-ui/core/TextField";

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
  const [valid, setValid] = useState(null);
  const history = useHistory();
  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (true) {
        setAuth(true);
        history.push("/");
      } else {
        setValid(false);
      }
      setLoading(false);
      setPassword("");
    }, 1000);
  };

  return (
    <div className="login container">
      <h1>Wpisz dane,aby się zalogować</h1>
      {valid === false ? (
        <div>
          <Alert
            severity="error"
            style={{ fontSize: "1.2rem", marginTop: 15, marginBottom: 15 }}
          >
            Niepoprawne dane logowania
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
          <LoadingButton loading={loading} label={"Zaloguj"} />
        </div>
      </form>
    </div>
  );
}
