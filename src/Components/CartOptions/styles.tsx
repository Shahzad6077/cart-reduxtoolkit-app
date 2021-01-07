import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cartOption: {
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    // marginBottom: "-20px",
    marginTop: "20px",
    opacity: 0,
  },
  forCartItem: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "6px",
    "& button": {
      padding: "0.5rem",
    },
    "& h6": {
      margin: "0px 2px",
      borderRadius: "4px",
    },
  },
}));

export default useStyles;
