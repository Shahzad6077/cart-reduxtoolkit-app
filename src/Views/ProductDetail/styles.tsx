import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  prodDetailWrapper: {
    color: "#fff",
    width: "100%",
    "& > div": {
      height: "100%",
    },

    "& h3": {
      paddingLeft: "10%",
      // marginTop: "6%",
    },
  },
  bgAnimer: {
    position: "absolute",
    bottom: 0,
    left: "0%",
    right: 0,
    top: "0%",
    zIndex: -1,
    width: "45%",
    backgroundColor: "var(--blue1)",

    display: "flex",
    alignItems: "flex-end",
    paddingBottom: theme.spacing(4),
  },
  imgWrapper: {
    cursor: "pointer",
    position: "relative",
    display: "flex",
    width: "70%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(1) !important",
    marginLeft: "20%",
  },
  sideMarginWrapper: {
    width: "80%",
    paddingLeft: "10%",
    position: "absolute",
    bottom: "5%",
  },
  cartOptWrapper: {
    opacity: "1 !important",
    justifyContent: "flex-start",
    "& button": {
      marginLeft: theme.spacing(3),
    },
  },
  rightDetailWrapper: {
    position: "relative",
    color: theme.palette.customColors?.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& h3": {
      paddingLeft: "0%",
    },
    "& p": {
      width: "85%",
    },
  },
  backArrowWrapper: {
    position: "absolute",
    right: "15%",
    top: "15%",
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
    "& svg": {
      width: "34px",
      height: "34px",
      fill: theme.palette.customColors?.black,
    },
    "& h6": {
      color: "inherit",
      fontSize: "max(14px, min(1vw, 18px))",
    },
  },
}));

export default useStyles;
