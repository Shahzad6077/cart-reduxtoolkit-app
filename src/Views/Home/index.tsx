import { Box, Container, Typography } from "@material-ui/core";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Product, SocialBox } from "./../../Components";
import useStyles from "./styles";
import { RootState } from "../../Store/rootReducer";
const Home: FC = () => {
  const classes = useStyles();
  const products = useSelector(
    ({ productReducer }: RootState) => productReducer.products
  );

  return (
    <Box className={classes.homeRoot}>
      {/* <Container>
        <Typography variant="h4">Trail Bikes</Typography>
      </Container> */}
      <SocialBox />
      <div className={classes.productListWrapper}>
        {products.map((obj, i) => {
          return <Product {...obj} />;
        })}
      </div>
    </Box>
  );
};

export default Home;
