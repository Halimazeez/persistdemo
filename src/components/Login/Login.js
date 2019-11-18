import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import "./Login.css";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  loginButton: {
    margin: theme.spacing(1),
    backgroundColor: "#2e2e2e",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2e2e2e",
      color: "#fff"
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: 300
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

export default function Login(props) {
  const { handleChange, handleLogin, handleReset } = props;

  const classes = useStyles();
  return (
    <div className="Login">
      <form onSubmit={handleLogin}>
        <Paper className={classes.paper}>
          <div className={classes.inputContainer}>
            <TextField
              name="email"
              className={classes.textField}
              label="Email"
              margin="normal"
              variant="outlined"
              autoComplete={false}
            />
            <TextField
              name=""
              className={classes.textField}
              onChange={handleChange}
              type="password"
              label="Password"
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button
            variant="contained"
            className={classes.loginButton}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleReset}
            type="submit"
          >
            Reset
          </Button>
        </Paper>
      </form>
    </div>
  );
}
