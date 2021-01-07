import React, { FC } from "react";
import {
  Container,
  Badge,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { Link, NavLink, useParams } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { RootState } from "../../Store/rootReducer";
import { useSelector } from "react-redux";
import useStyles from "./styles";

type HeaderProps = {
  isProductDetailPage: boolean;
  cartHandler: () => void;
};
const Header: FC<HeaderProps> = ({ isProductDetailPage, cartHandler }) => {
  const classes = useStyles({ isProductDetailPage });
  const qtyCount = useSelector(
    (state: RootState) => state.cartReducer.totalQuantity
  );
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
          <IconButton onClick={cartHandler}>
            <Badge color="primary" badgeContent={qtyCount}>
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </nav>
      </Hidden>
    </Container>
  );
};

export default Header;
