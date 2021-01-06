import { FC } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    borderRadius: 8,
    border: 0,
    color: "white",
    padding: "1rem 1.1rem",
    display: "flex",
    "& svg": {
      width: "24px",
      height: "24px",
      fill: "#fff",
    },
    "& h6": {
      marginLeft: "8px",
    },
  },
}));

type CartButtonProps = {
  onClick: () => void;
  label?: string | null;
};
const CartButton: FC<CartButtonProps> = ({ children, onClick, label }) => {
  const classes = useStyles();
  return (
    <motion.button
      layout
      layoutId="cart-btn"
      className={classes.root}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
      {label && <Typography variant="subtitle2">{label}</Typography>}
    </motion.button>
  );
};

export default CartButton;
