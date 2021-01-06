import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeRoot: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden",
  },
  productListWrapper: {
    // border: "1px solid green",
    flexGrow: 1,
    display: "flex",
    overflow: "hidden",
    overflowX: "scroll",
    padding: "0px 2rem",
    scrollBehavior: "smooth",
    "&> div": {
      marginLeft: "calc(1vw + 2.5rem)",
      marginRight: "calc(1vw + 2.5rem)",
    },
  },
  subtitleWrap: {
    position: "absolute",
    top: "6%",
    letterSpacing: "4px",
    color: theme.palette.customColors?.black,
  },
}));

export default useStyles;
