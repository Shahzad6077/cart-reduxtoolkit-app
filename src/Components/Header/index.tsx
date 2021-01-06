import React, { FC } from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { Link, NavLink, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "max(22px,min(3.5vw,26px))",
    paddingBottom: "max(22px,min(3.5vw,26px))",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    letterSpacing: "2px",
    borderBottom: "1px solid",
  },
  brand: (props: { isProductDetailPage: boolean }) => ({
    display: "flex",
    alignItems: "flex-end",
    textDecoration: "none",

    "& h4,h5": {
      lineHeight: "90%",
      color: props.isProductDetailPage
        ? "#fff"
        : theme.palette.customColors?.black,
    },
    "& span": {
      maxWidth: "9px",
      maxHeight: "9px",
      width: "0.6vw",
      height: "0.6vw",
      background: props.isProductDetailPage
        ? "#fff"
        : theme.palette.customColors?.black,
      borderRadius: "50%",
    },
  }),
  nav: {
    display: "flex",
    "& a": {
      textDecoration: "none",
      fontWeight: 700,
      color: theme.palette.customColors?.gray2,
      padding: "8px",
      transition: "color 200ms linear",
      position: "relative",
      overflow: "hidden",

      "&::before": {
        content: "''",
        backgroundColor: "#F4F2F6",
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        transform: "translate(-100%, 100%)",
        transition: "all 250ms linear",
      },
      "&:hover": {
        "&::before": {
          transform: "translate(0%, 0%)",
        },
      },
    },
  },
  activeLink: {
    color: `${theme.palette.customColors?.black} !important`,
  },
}));

type HeaderProps = {
  isProductDetailPage: boolean;
  cartHandler: () => void;
};
const Header: FC<HeaderProps> = ({ isProductDetailPage, cartHandler }) => {
  const classes = useStyles({ isProductDetailPage });
  const params = useParams();
  return (
    <Container className={classes.root} maxWidth="xl">
      <Link to="/" className={classes.brand}>
        <Typography variant="h4" color="secondary">
          S
        </Typography>
        <Typography variant="h5" color="secondary">
          hopping
        </Typography>
        <span></span>
      </Link>
      <Hidden xsDown>
        <nav className={classes.nav}>
          <NavLink to="/" end={true} activeClassName={classes.activeLink}>
            Home
          </NavLink>
          <IconButton>Cart</IconButton>
        </nav>
      </Hidden>
    </Container>
  );
};

export default Header;
