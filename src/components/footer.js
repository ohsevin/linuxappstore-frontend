
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#fafafa",
        color: "black",
        textAlign: "center"
    }
  });

export default () => {
    const classes = styles();
    return (
        <footer className={classes.footer}><small>&copy; Copyright 2019, StellaSoft - 0.3.4</small></footer>
    )
}
