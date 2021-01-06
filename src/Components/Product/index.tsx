import { FC } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Button,
  Grid,
  withStyles,
} from "@material-ui/core";
import { ReactComponent as PlusIcon } from "./../../Assets/plus.svg";
import useStyles from "./styles";
import { ProductItem } from "./../../Types/store";
import { useAppDispatch } from "../../Store/store";
import { addCarItem } from "../../Store/Slices/cart";
const uri =
  "https://firebasestorage.googleapis.com/v0/b/mystore339.appspot.com/o/fuel-ex-axa-0.png?alt=media";
//
interface Props extends ProductItem {}

const bgAnimer = {
  rest: {
    scale: 0.3,
    opacity: 0,
    backgroundColor: "transparent",
  },
  hover: {
    opacity: 1,
    scale: 1,
    backgroundColor: "var(--blue1) !important",
  },
};

const imgMotion = {
  rest: {
    scale: 1,
    width: "80%",
  },
  hover: {
    scale: 1.3,
    width: "100%",
  },
};
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const Product: FC<Props> = ({
  imageUrl,
  price,
  colors,
  description,
  id,
  title,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const onAddBtn = () => {
    dispatch(
      addCarItem({
        imageUrl: imageUrl[0],
        price,
        colors: colors[0],
        description,
        id,
        title,
        cartItemId: `${id}-0`,
        quantity: 1,
      })
    );
  };
  return (
    <motion.div
      //   animate="rest"
      className={classes.productWrapper}
      //   variants={rootMotion}
    >
      <motion.div
        initial={false}
        whileHover="hover"
        animate="rest"
        className={classes.imgWrapper}
        variants={variants}
      >
        <motion.div
          className={classes.bgAnimer}
          variants={bgAnimer}
        ></motion.div>
        <motion.img
          src={imageUrl[0]}
          alt="product"
          variants={imgMotion}
          transition={{
            delay: 0.4,
          }}
        />
        <CartOptions price={price} onClick={onAddBtn} />
      </motion.div>
    </motion.div>
  );
};

type CartOptionType = {
  price: number;
  onClick: (e: React.MouseEvent) => void;
};
const CartOptions: FC<CartOptionType> = ({ price, onClick }) => {
  const classes = useStyles();
  return (
    <motion.div
      className={classes.cartOption}
      initial="rest"
      variants={{
        rest: { opacity: 0 },
        hover: { opacity: 1 },
      }}
      transition={{
        delay: 0.4,
      }}
    >
      <div>
        <Typography variant="subtitle2">Price</Typography>
        <Typography variant="subtitle1">${price}</Typography>
      </div>

      <CartButton onClick={onClick}>
        <PlusIcon />
      </CartButton>
    </motion.div>
  );
};

const CartButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #fe6b8b 30%, #FF8E53 90%)",
    borderRadius: 8,
    border: 0,
    color: "white",
    height: 52,
    //   padding: '0 30px',
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

    "& svg": {
      width: "24px",
      height: "24px",
      fill: "#fff",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default Product;
