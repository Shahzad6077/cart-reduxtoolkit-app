import { FC, Fragment, useEffect } from "react";
import useStyles from "./styles";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

type Props = {
  onProductDetailPage: () => void;
};

const ProductDetail: FC<Props> = ({ onProductDetailPage }) => {
  const classes = useStyles();

  const params = useParams();
  useEffect(() => {
    if (params?.prodId) {
      onProductDetailPage();
    }
    return () => {
      onProductDetailPage();
    };
  }, []);
  return (
    <Fragment>
      <motion.div
        layoutId={`layout-bgAnimer-${params?.prodId}`}
        className={classes.bgAnimer}
        onLayoutAnimationComplete={() => console.log("baby")}
      ></motion.div>
      <motion.div className={classes.prodDetailWrapper}></motion.div>
    </Fragment>
  );
};

export default ProductDetail;
