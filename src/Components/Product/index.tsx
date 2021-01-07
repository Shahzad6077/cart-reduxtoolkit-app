import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import { ProductItem } from "./../../Types/store";
import { useAppDispatch } from "../../Store/store";
import { addCarItem } from "../../Store/Slices/cart";
import { wrapperVarients, animerVarients, imgVarients } from "./Motion";
import ColorPalette from "../ColorPalette";
import { useNavigate } from "react-router-dom";
import CartOptions from "../CartOptions";

interface Props extends ProductItem {
  openSnackbar: () => void;
}

const Product: FC<Props> = ({
  imageUrl,
  price,
  colors,
  description,
  id,
  title,
  openSnackbar,
}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [curColorIndex, setCurColorIndex] = useState<number>(0);
  const [layoutID, setLayoutID] = useState<number>(() =>
    Math.floor(Math.random() * 999)
  );

  const onAddBtn = () => {
    dispatch(
      addCarItem({
        imageUrl: imageUrl[curColorIndex],
        price,
        colors: colors[curColorIndex],
        description,
        id,
        title,
        cartItemId: `${id}-${curColorIndex}`,
        quantity: 1,
      })
    );
    openSnackbar();
  };
  const colorHandler = (index: number) => {
    console.log(index);
    setCurColorIndex(index);
  };

  const makeRandNumForAnim = layoutID;
  return (
    <motion.div layout className={classes.productWrapper}>
      <motion.div
        layout
        initial={false}
        whileHover="hover"
        animate="rest"
        className={classes.imgWrapper}
        variants={wrapperVarients}
        onClick={() =>
          navigate(`product/${id}/${curColorIndex}`, {
            state: { makeRandNumForAnim },
          })
        }
      >
        <motion.div
          layout
          layoutId={`layout-bgAnimer-${makeRandNumForAnim}`}
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
          layoutId={`layout-prodimg-${makeRandNumForAnim}`}
        />
        <ColorPalette
          colors={colors}
          activeIndex={curColorIndex}
          onClick={colorHandler}
        />
        <CartOptions
          price={price}
          onClick={onAddBtn}
          animationId={makeRandNumForAnim}
        />
      </motion.div>
    </motion.div>
  );
};

export default Product;
