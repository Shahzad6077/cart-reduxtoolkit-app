import { Box } from "@material-ui/core";
import { type } from "os";
import { FC } from "react";
import useStyles from "./styles";
import { ReactComponent as FbIcon } from "./../../Assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "./../../Assets/twitter.svg";
import { ReactComponent as InstaIcon } from "./../../Assets/instagram.svg";
type Props = {};

const SocialBox: FC<Props> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <InstaIcon />
      <FbIcon />
      <TwitterIcon />
    </Box>
  );
};

export default SocialBox;
