export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const fadeAndSlide = {
  hidden: { x: 300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
export const fadeAndSlide1 = {
  hidden: { x: 500, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};
