import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import { ReactComponent as PlusIcon } from "./../../Assets/plus.svg";
import useStyles from "./styles";
import { ProductItem } from "./../../Types/store";
import { useAppDispatch } from "../../Store/store";
import { addCarItem } from "../../Store/Slices/cart";
import {
  wrapperVarients,
  animerVarients,
  imgVarients,
  cartOptionVarients,
} from "./Motion";
import CartButton from "./../CartButton";
import ColorPlatte from "./../ColorPallate";
import { useNavigate } from "react-router-dom";
interface Props extends ProductItem {}

const Product: FC<Props> = ({
  imageUrl,
  price,
  colors,
  description,
  id,
  title,
}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [curColorIndex, setCurColorIndex] = useState<number>(0);
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
  const colorHandler = (index: number) => {
    console.log(index);
    setCurColorIndex(index);
  };
  return (
    <motion.div layout className={classes.productWrapper}>
      <motion.div
        layout
        initial={false}
        whileHover="hover"
        animate="rest"
        className={classes.imgWrapper}
        variants={wrapperVarients}
        onClick={() => navigate(`product/${id}/${curColorIndex}`)}
      >
        <motion.div
          layout
          layoutId={`layout-bgAnimer-${id}`}
          className={classes.bgAnimer}
          variants={animerVarients}
          transition={{
            type: "tween",
          }}
        ></motion.div>
        <motion.img
          src={imageUrl[curColorIndex]}
          alt="product"
          variants={imgVarients}
          transition={{
            delay: 0.4,
          }}
          layoutId="layout-prodimg"
        />
        <ColorPlatte
          colors={colors}
          activeIndex={curColorIndex}
          onClick={colorHandler}
        />
        <CartOptions price={price} onClick={onAddBtn} />
      </motion.div>
    </motion.div>
  );
};

type CartOptionType = {
  price: number;
  onClick: () => void;
};
const CartOptions: FC<CartOptionType> = ({ price, onClick }) => {
  const classes = useStyles();
  return (
    <motion.div
      layoutId="layout-cartOption"
      className={classes.cartOption}
      initial="rest"
      variants={cartOptionVarients}
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

export default Product;
