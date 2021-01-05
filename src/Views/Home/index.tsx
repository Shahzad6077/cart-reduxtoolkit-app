import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FC } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridWrapper: {},
}));
const Home: FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridWrapper}>
      <Typography variant="h3">Trail Bikes</Typography>
    </Grid>
  );
};

export default Home;
