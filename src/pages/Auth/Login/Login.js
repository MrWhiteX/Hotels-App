import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Login(props) {
  const classes = useStyles();
  return (
    <div className="login container">
      <h1>Wpisz dane,aby się zalogować</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Hasło" variant="outlined" />
      </form>
      <button>Zaloguj</button>
    </div>
  );
}
