export const revealFromDown = {
  hidden: { y: 20, opacity: 0 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 1.5, delay: delay },
  }),
};