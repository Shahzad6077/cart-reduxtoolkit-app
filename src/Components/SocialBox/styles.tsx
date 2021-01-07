import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100px",
    height: "40x",

    bottom: "4%",
    right: "3%",
    [theme.breakpoints.down("md")]: {
      right: "7%",
    },
    "& a": {
      textDecoration: "none",
      textTransform: "uppercase",
      color: theme.palette.customColors?.blue1,
    },
    "& svg": {
      fill: "#3c3c3d",
      width: "20px",
      height: "20px",
      cursor: "pointer",
      marginLeft: "0.6rem",
    },
  },
}));
export default useStyles;
