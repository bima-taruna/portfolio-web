const animate = {
  menuVariants: {
    opened: {
      display: 'block',
      height: "35vh",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      height: 0,
      display: 'none',
      transition: {
        when: "afterChildren",
      },
    },
  },
  linkVariants: {
    opened: {
      opacity: 1,
      y: 5,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  },
};

export default animate;
