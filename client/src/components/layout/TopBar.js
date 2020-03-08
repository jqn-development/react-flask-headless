import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  appBar: { boxShadow: "none" },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: '"Product Sans", serif',
    fontWeight: "600",
    color: "#000",
  },
  loginLink: {
    fontFamily: '"Lora"',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.appBar}
      elevation={0}
      color="transparent"
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link to="/">
            <Typography variant="h4" className={classes.title}>
              Reactor Labs
            </Typography>
          </Link>
        </IconButton>
        <div className={classes.flexGrow} />
        <Link to="/login">
          <Button>
            <Typography variant="subtitle1" className={classes.loginLink}>
              Login
            </Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {};

export default TopBar;
