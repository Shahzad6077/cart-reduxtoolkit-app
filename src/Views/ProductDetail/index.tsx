import { FC, Fragment, useEffect, useState } from "react";
import useStyles from "./styles";
import { motion } from "framer-motion";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { addCarItem } from "../../Store/Slices/cart";
import { useAppDispatch } from "../../Store/store";
import {
  ProductItem,
  ProductsSliceState,
  DEFAULT_PRODUCT_ITEM,
} from "../../Types/store";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/rootReducer";
import { ColorPalette, CartOptions } from "../../Components";
import { ReactComponent as BackArrow } from "./../../Assets/long-arrow-right.svg";
type Props = {
  onProductDetailPage: () => void;
  openSnackbar: () => void;
};
interface ParamQuery {
  prodId?: string;
  colorId?: string | number;
}

const ProductDetail: FC<Props> = ({ onProductDetailPage, openSnackbar }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const { prodId, colorId }: ParamQuery = useParams();
  const dispatch = useAppDispatch();
  const productReducer: ProductsSliceState = useSelector(
    (state: RootState) => state.productReducer
  );
  const [product, setProduct] = useState<ProductItem>(DEFAULT_PRODUCT_ITEM);
  const { imageUrl, price, colors, description, id, title } = product;

  const [animID, setAnimID] = useState(
    () => (state as any)?.makeRandNumForAnim | 0
  );

  useEffect(() => {
    const getProd = productReducer.products.find(
      ({ id }: ProductItem) => id === prodId
    );
    if (!getProd) {
      navigate("/not-found");
    } else {
      setProduct(getProd);
    }
    if (prodId) {
      onProductDetailPage();
    }
    return () => {
      onProductDetailPage();
    };
  }, [prodId]);

  const onAddBtn = () => {
    dispatch(
      addCarItem({
        imageUrl: imageUrl[parseInt(colorId)],
        price,
        colors: colors[parseInt(colorId)],
        description,
        id,
        title,
        cartItemId: `${id}-${parseInt(colorId)}`,
        quantity: 1,
      })
    );
    openSnackbar();
  };
  const colorHandler = (index: number) => {
    navigate(`/product/${id}/${index}`);
  };

  console.log("animID", animID);
  return (
    <Fragment>
      <motion.div
        layoutId={`layout-bgAnimer-${animID}`}
        className={classes.bgAnimer}
      ></motion.div>
      <motion.div className={classes.prodDetailWrapper}>
        <Grid container>
          <Grid item sm={7} style={{ position: "relative" }}>
            <Typography variant="h3">{title}</Typography>
            <motion.img
              className={classes.imgWrapper}
              layoutId={`layout-prodimg-${animID}`}
              src={imageUrl[parseInt(colorId)]}
              animate={{ scale: 1, width: "70%" }}
            />
            <div className={classes.sideMarginWrapper}>
              <ColorPalette
                colors={colors}
                activeIndex={parseInt(colorId)}
                onClick={colorHandler}
              />
              <CartOptions
                price={price}
                onClick={onAddBtn}
                animationId={animID}
                overrideClass={classes.cartOptWrapper}
              />
            </div>
          </Grid>
          <Grid item sm={5} className={classes.rightDetailWrapper}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3">Description</Typography>
              <Typography variant="body1">{description}</Typography>
            </motion.div>
            <motion.div
              className={classes.backArrowWrapper}
              onClick={() => navigate(-1)}
              initial="rest"
              whileHover="hovver"
            >
              <motion.div
                variants={{
                  rest: {
                    y: "125%",
                    opacity: 0,
                  },
                  hovver: {
                    opacity: 1,
                    y: "0%",
                  },
                }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="subtitle2">BACK TO SHOP</Typography>
              </motion.div>
              <BackArrowAnim />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Fragment>
  );
};

const BackArrowAnim = () => {
  return (
    <motion.svg
      animate={{ x: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z" />
    </motion.svg>
  );
};
export default ProductDetail;
