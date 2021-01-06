import { FC, Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

type Props = {
  isCartOpen: boolean;
  onClose: () => void;
};

const CartDrawer: FC<Props> = ({ isCartOpen, onClose }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Drawer anchor="right" open={isCartOpen} onClose={onClose}>
        <Typography>ALI</Typography>
      </Drawer>
    </Fragment>
  );
};

export default CartDrawer;
