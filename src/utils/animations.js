// Animations

const topBar = {
  closed: {
    rotate: 0,
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
  open: {
    rotate: -45,
    y: 6,
    transition: {
      delay: 0.2,
    },
  },
}

const middleBar = {
  closed: {
    opacity: 1,
    transition: {
      delay: 0.01,
    },
  },
  open: {
    opacity: 0,
    transition: {
      delay: 0.01,
    },
  },
}

const bottomBar = {
  closed: {
    rotate: 0,
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
  open: {
    rotate: 45,
    y: -6,
    transition: {
      delay: 0.2,
    },
  },
}

const easing = [0.6, -0.5, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
}

const fadeInUpDelayed = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

module.exports = {
  topBar,
  middleBar,
  bottomBar,
  fadeInUp,
  fadeInUpDelayed,
  stagger,
}
