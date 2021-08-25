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

const ProfileDetails = () => {
  const classes = useStyles();
  return (
    <div className="profile__details">
      <h1>Zaaktualizuj swoje dane:</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Hasło" variant="outlined" />
      </form>
      <button>Zapisz</button>
    </div>
  );
};

export default ProfileDetails;
