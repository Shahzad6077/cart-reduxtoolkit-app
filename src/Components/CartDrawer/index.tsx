import { FC, Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import useStyles from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/rootReducer";
import { CartItem } from "../../Types/store";
import { CartItemBox } from "..";

type Props = {
  isCartOpen: boolean;
  onClose: () => void;
};

const CartDrawer: FC<Props> = ({ isCartOpen, onClose }) => {
  const classes = useStyles();
  const cartReducerState = useSelector((state: RootState) => state.cartReducer);
  const { items, totalAmount, totalQuantity } = cartReducerState;
  return (
    <Fragment>
      <Drawer anchor="right" open={isCartOpen} onClose={onClose}>
        <Box width={380}>
          <Typography variant="body2">ITEMS</Typography>
          {items.map((obj: CartItem, i) => {
            return <CartItemBox key={i} {...obj} />;
          })}
        </Box>
      </Drawer>
    </Fragment>
  );
};

export default CartDrawer;
