import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {},
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
}));

export default function Header() {
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
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Reactor Labs
        </Typography>
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
}
