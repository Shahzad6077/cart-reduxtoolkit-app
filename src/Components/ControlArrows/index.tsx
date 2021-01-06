import { FC } from "react";
import useStyles from "./styles";
import { ReactComponent as LeftArrow } from "./../../Assets/angle-left.svg";
import { ReactComponent as RightArrow } from "./../../Assets/angle-right.svg";
type Props = {
  side: "left" | "right";
  elemRef?: HTMLDivElement | any;
};

const ControlArrows: FC<Props> = ({ elemRef, side }) => {
  const classes = useStyles({ side });

  const moveHandler = () => {
    let val: number;
    if (side === "left") {
      val = elemRef.current.scrollLeft - 310;
    } else {
      val = elemRef.current.scrollLeft + 310;
    }
    elemRef &&
      elemRef.current.scrollTo({
        left: val,
      });
  };
  return (
    <div className={classes.controlWrapper} onClick={moveHandler}>
      {side === "left" ? <LeftArrow /> : <RightArrow />}
    </div>
  );
};

export default ControlArrows;
