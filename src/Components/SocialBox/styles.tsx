import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    width: "100px",
    height: "22px",

    bottom: "8%",
    right: "8%",

    "& svg": {
      fill: "#3c3c3d",
      width: "20px",
      height: "20px",
    },
  },
}));
export default useStyles;
