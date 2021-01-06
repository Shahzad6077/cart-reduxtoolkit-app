import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  controlWrapper: (props: { side: string }) => ({
    background: "linear-gradient(45deg, #fe6b8b 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    width: "calc(2.5vw + 2rem);",
    height: "calc(2.5vw + 2rem);",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    right: 0,
    top: "50%",
    left: props.side === "left" ? 0 : "unset",
    zIndex: 10,
    "& svg": {
      width: "60%",
      height: "60%",
      fill: "#fffc",
    },
  }),
}));

export default useStyles;
