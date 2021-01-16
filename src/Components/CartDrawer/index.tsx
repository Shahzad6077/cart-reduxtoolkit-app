import { FC, Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import useStyles from "./styles";
import { Box, Divider, Typography, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/rootReducer";
import { CartItem } from "../../Types/store";
import { CartItemBox, CartButton } from "..";
import { clearCart } from "./../../Store/Slices/cart";

type Props = {
  isCartOpen: boolean;
  onClose: () => void;
  onCheckoutMsg: () => void;
};

const CartDrawer: FC<Props> = ({ isCartOpen, onClose, onCheckoutMsg }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartReducerState = useSelector((state: RootState) => state.cartReducer);
  const { items, totalAmount, totalQuantity } = cartReducerState;

  const onCheckout = () => {
    dispatch(clearCart());
    onCheckoutMsg();
  };
  return (
    <Fragment>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={onClose}
        style={{ overflow: "hidden" }}
      >
        <Box
          width={380}
          display="flex"
          flexDirection="column"
          flexGrow={1}
          style={{ height: "100vh" }}
        >
          <Typography
            variant="body2"
            align="center"
            style={{ margin: "1rem 0px" }}
          >
            ITEMS
          </Typography>
          <Divider />
          <Box
            overflow="scroll"
            style={{ overflowX: "hidden" }}
            className="scrollp"
            flexGrow={1}
          >
            {items.map((obj: CartItem, i) => {
              return <CartItemBox key={i} {...obj} />;
            })}
          </Box>
          <Divider />
          <Container>
            <Box
              className={classes.checkoutWrapper}
              display="flex"
              width="100%"
              justifyContent="space-between"
              marginY="1rem"
            >
              <div>
                <Typography variant="body2">Price</Typography>
                <Typography variant="body1">${totalAmount}</Typography>
              </div>
              <CartButton onClick={onCheckout}>CHECKOUT</CartButton>
            </Box>
          </Container>
        </Box>
      </Drawer>
    </Fragment>
  );
};

export default CartDrawer;
