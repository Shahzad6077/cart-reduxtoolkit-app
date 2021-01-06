export const rootVarients = {};
export const wrapperVarients = {
  rest: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  hover: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};
export const animerVarients = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  hover: {
    opacity: 1,
    scale: 1,
    backgroundColor: "var(--blue1) !important",
  },
};
export const imgVarients = {
  rest: {
    scale: 1,
    width: "80%",
  },
  hover: {
    scale: 1.2,
    width: "100%",
  },
};
export const cartOptionVarients = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};
