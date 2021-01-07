import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cartItemWrapper: {
    margin: "1rem 0px",

    "& > div:nth-child(1)": {
      "& img": {
        height: "120px",
      },
    },
    "& > div:nth-child(2)": {
      paddingLeft: theme.spacing(3),
      "& *": {
        color: theme.palette.customColors?.black,
      },
    },
  },
  actionBtn: {
    opacity: "1 !important",
    width: "80% !important",
    margin: 0,
    flexDirection: "column",
  },
  clrPalette: {
    margin: 0,
    marginTop: "2px",
  },
}));

export default useStyles;
