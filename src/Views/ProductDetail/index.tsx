import { FC } from "react";
import { Outlet, useParams } from "react-router-dom";

import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const SpacexLaunches: FC = () => {
  const classes = useStyles();
  const param = useParams();

  // const lid = param?.launchId;
  // const isLaunchNotSelect = typeof lid === "undefined";
  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" align="center">
        Products
      </Typography>
      <Grid container>
        <Outlet />
      </Grid>
    </div>
  );
};

export default SpacexLaunches;
