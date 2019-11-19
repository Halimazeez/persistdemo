import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { logout } from "../../redux/actions/me";

const mapStateToProps = state => ({
  me: state.me
});

const mapDispatchToProps = { logout };

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2)
  }
}));

function Profile(props) {
  const classes = useStyles();

  const logout = () => props.logout();

  const user = props.me.data;
  console.log(user);
  return (
    <Paper className={classes.paper}>
      {user.fullname}

      <div>
        <Button variant="contained" className={classes.button} onClick={logout}>
          Logout
        </Button>
      </div>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
