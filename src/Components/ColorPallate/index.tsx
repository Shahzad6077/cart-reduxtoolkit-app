import { FC } from "react";
import useStyles from "./styles";
import { ColorPlatte } from "./../../Types/store";

type Props = {
  colors: ColorPlatte[];
  activeIndex: number;
  onClick: (index: number) => void;
};

const ColorPlatlte: FC<Props> = ({ colors, activeIndex, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.pallateWrapper}>
      {colors.map((obj, i) => {
        return (
          <div
            key={i}
            style={{
              border: `${
                activeIndex === i ? "2px solid var(--white)" : "none"
              }`,
              padding: "2px",
              borderRadius: "50%",
            }}
          >
            <div
              className={classes.clrPill}
              style={{
                background: `linear-gradient(0deg, ${obj.primary} 50%, ${obj.secondary} 50%)`,
              }}
              onClick={() => onClick(i)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ColorPlatlte;
