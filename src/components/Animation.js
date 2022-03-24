export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    x: -5000,
    transition: {
      duration: 0.5,
    },
  },
};
export const authPageAnimation = {
  hidden: {
    opacity: 0,
    x: 800,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: 800,
    transition: {
      duration: 0.3,
    },
  },
};
export const loginSignupPageAnimation = {
  hidden: {
    opacity: 0,
    x: 800,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: -800,
    transition: { type: "spring", duration: 0.3 },
  },
};
export const startPageAnimation = {
  initial: {
    y: 0,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50000,
    transition: {
      duration: 0.3,
    },
  },
};

export const weatherForecastAnimation = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
export const menuAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.3 },
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: { type: "spring", duration: 0.3 },
  },
};

export const preloaderAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const cgpaCircleAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const cardAnimation1 = {
  hidden: { opacity: 0, x: -100, y: -100, scale: 1.1 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, delay: 0.5, ease: "easeOut" },
  },
};

export const cardAnimation2 = {
  hidden: { opacity: 0, x: -100, y: -100, scale: 1.1 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.7, ease: "easeOut" },
  },
};

export const courseWindow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
