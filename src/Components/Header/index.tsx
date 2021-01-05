import React, { FC } from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  Hidden,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "max(22px,min(3.5vw,26px))",
    paddingBottom: "max(22px,min(3.5vw,26px))",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    letterSpacing: "2px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    "& a": {
      textDecoration: "none",
      fontWeight: 700,
      color: theme.palette.customColors?.gray2,
      padding: "8px",
      transition: "color 200ms linear",
    },
  },
  activeLink: {
    color: `${theme.palette.customColors?.black} !important`,
  },
}));
const Header: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Link to="/" className={classes.brand}>
        <Typography variant="h4" color="secondary">
          CYCLING
        </Typography>
      </Link>
      <Hidden xsDown>
        <nav className={classes.nav}>
          <NavLink to="/" end={true} activeClassName={classes.activeLink}>
            Home
          </NavLink>
          <NavLink to="cart" activeClassName={classes.activeLink}>
            Cart
          </NavLink>
        </nav>
      </Hidden>
    </Container>
  );
};

export default Header;
