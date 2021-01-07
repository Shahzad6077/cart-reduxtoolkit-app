import { motion } from "framer-motion";
import React, { FC } from "react";
import useStyles from "./styles";
import { cartOptionVarients } from "../Product/Motion";
import { Typography } from "@material-ui/core";
import CartButton from "../CartButton";

import { ReactComponent as PlusIcon } from "./../../Assets/plus.svg";
import { ReactComponent as MinusIcon } from "./../../Assets/minus.svg";

type CartOptionType = {
  price: number;
  onClick: () => void;
  animationId?: number;
  overrideClass?: string;
  onRemove?: () => void;
  varient?: "CART" | "LIST";
  qty?: number;
};
const CartOptions: FC<CartOptionType> = ({
  price,
  onClick,
  animationId,
  overrideClass,
  varient,
  qty,
  onRemove,
}) => {
  const classes = useStyles();

  const renderBtns = () => {
    if (varient !== "CART") {
      return (
        <CartButton onClick={onClick}>
          <PlusIcon />
        </CartButton>
      );
    } else {
      return (
        <div className={classes.forCartItem}>
          <CartButton
            onClick={() => {
              onRemove && onRemove();
            }}
          >
            <MinusIcon />
          </CartButton>
          <Typography variant="subtitle2">{qty}</Typography>
          <CartButton onClick={onClick}>
            <PlusIcon />
          </CartButton>
        </div>
      );
    }
  };
  return (
    <motion.div
      layoutId={`layout-cartOption-${animationId}`}
      className={classes.cartOption + " " + overrideClass}
      initial="rest"
      variants={cartOptionVarients}
    >
      <div>
        <Typography variant="subtitle2">Price</Typography>
        <Typography variant="subtitle1">${price}</Typography>
      </div>
      {renderBtns()}
    </motion.div>
  );
};
export default CartOptions;
