import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productWrapper: {
    minWidth: "320px",
    maxWidth: "460px",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "relative",
  },
  imgWrapper: {
    cursor: "pointer",
    position: "relative",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "75%",
    [theme.breakpoints.down("sm")]: {
      height: "90%",
    },
    "& img": {
      display: "block",
      width: "80%",
    },
  },

  bgAnimer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    borderRadius: "34px 34px 0px 0px",
    zIndex: -1,
    scale: 0,
    opacity: 0,
    backgroundColor: "transparent",
  },
}));
export default useStyles;
