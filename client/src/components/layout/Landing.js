import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  content: { marginTop: "12%" },
  h5: {
    fontFamily: "monospace",
  },
  icon: {
    fontSize: 25,
  },
});

const Landing = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        my={1}
        py={1}
      >
        <Box py={1}>
          <CodeIcon className={classes.icon} />
        </Box>
        <Box py={1} pl={1}>
          <Typography
            className={classes.h5}
            variant="h5"
            component="h5"
            gutterBottom
          >
            REACT.js
          </Typography>
        </Box>
      </Box>
      <Container component="main" maxWidth="xl" className={classes.content}>
        <Grid container spacing={0} align="center" justify="center">
          <Grid item container justify="center" lg={12}>
            <Typography variant="h4" gutterBottom>
              <b>Build</b> a login/auth app with{" "}
              <span className={classes.h5}>REACT</span> from scratch
            </Typography>
          </Grid>
          <Grid item container justify="center" lg={12}>
            <Typography variant="h5" gutterBottom>
              Create a (minimal) React app with user login/registration
            </Typography>
          </Grid>
          <Grid
            container
            item
            lg={12}
            justify="center"
            direction="row"
            spacing={2}
          >
            <Grid item>
              <Link to="/register">
                <Button variant="contained" color="primary">
                  Register
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
