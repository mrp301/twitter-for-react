/** @jsxImportSource @emotion/react */
import React from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";

const transition = { duration: 0.2, ease: "easeInOut" };
const animatoin = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const SlideIn: React.FC = ({ children }) => {
  return (
    <div css={style}>
      <motion.div
        variants={animatoin}
        initial="hidden"
        animate="visible"
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
};

const style = css({
  overflow: "hidden",
});

export { SlideIn };
