import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
  },
  grid: {
    height: "100%",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  message: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    textAlign: "center",
  },
  title: {
    marginTop: theme.spacing(3),
    fontWeight: 400,
    fontFamily: "Lora",
  },
  brand: {},
  buttons: {
    marginTop: theme.spacing(3),
  },
  suggestion: {
    marginTop: theme.spacing(2),
  },
  lightText: {
    color: theme.palette.background.default,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.content} item lg={12} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <div className={classes.message}>
                <Typography className={classes.title} variant="h4">
                  <b>Build</b> a login/register app with{" "}
                  <span className={classes.brand}>REACT</span> from scratch
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Create a minimal React.js app
                </Typography>
                <Grid
                  className={classes.buttons}
                  container
                  spacing={2}
                  direction="row"
                  justify="center"
                >
                  <Grid item>
                    <Button color="primary" size="large" variant="contained">
                      <Link className={classes.lightText} to="/login">
                        Login
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button size="large" variant="contained">
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
