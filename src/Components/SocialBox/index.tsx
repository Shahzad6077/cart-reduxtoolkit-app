import { Box, Typography } from "@material-ui/core";
import React, { FC } from "react";
import useStyles from "./styles";
import { ReactComponent as FbIcon } from "./../../Assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "./../../Assets/twitter.svg";
import { ReactComponent as InstaIcon } from "./../../Assets/instagram.svg";
type Props = {};

const SocialBox: FC<Props> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <a
        href="https://dribbble.com/shots/6945782-Bike-Shop-Interaction"
        target="_blank"
      >
        <Typography variant="caption">Design By Den klenkov</Typography>
      </a>
      <InstaIcon />
      <FbIcon />
      <TwitterIcon />
    </Box>
  );
};

export default SocialBox;
