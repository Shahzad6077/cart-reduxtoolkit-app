import { Box, Container, Typography } from "@material-ui/core";
import { FC, useRef } from "react";
import { useSelector } from "react-redux";
import { Product, SocialBox, ControlArrow } from "./../../Components";
import useStyles from "./styles";
import { RootState } from "../../Store/rootReducer";
import { useMotionValue } from "framer-motion";
const Home: FC = () => {
  const scrollX = useMotionValue(0);
  const scrollWrapperRef = useRef<HTMLDivElement | any>();
  const classes = useStyles();
  const products = useSelector(
    ({ productReducer }: RootState) => productReducer.products
  );

  return (
    <Box className={classes.homeRoot}>
      <Container maxWidth="lg" className={classes.subtitleWrap}>
        <Typography variant="h3">Trail Bikes</Typography>
      </Container>
      <ControlArrow side="left" elemRef={scrollWrapperRef} />
      <ControlArrow side="right" elemRef={scrollWrapperRef} />
      <div
        id="prodwrapper"
        className={classes.productListWrapper}
        ref={scrollWrapperRef}
      >
        {products.map((obj, i) => {
          return <Product key={i} {...obj} />;
        })}
      </div>
    </Box>
  );
};

export default Home;
