import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pallateWrapper: {
    display: "flex",
    margin: "1.5rem 4px 0px 4px",
    height: "40px",
    alignItems: "center",
    "& > div": {
      margin: "0rem 4px 0px 4px",
    },
  },
  clrPill: {
    padding: "0.8rem",
    borderRadius: "50%",
  },
}));

export default useStyles;
