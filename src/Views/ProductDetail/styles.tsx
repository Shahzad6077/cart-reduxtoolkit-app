import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  prodDetailWrapper: {},
  bgAnimer: {
    position: "absolute",
    bottom: 0,
    left: "0%",
    right: 0,
    top: "0%",
    zIndex: -1,
    width: "40%",
    backgroundColor: "var(--blue1)",
  },
}));

export default useStyles;
