import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import TopBar from "../../components/layout/TopBar";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
  content: {
    height: "100%",
  },
}));

const Public = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Public.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Public;
