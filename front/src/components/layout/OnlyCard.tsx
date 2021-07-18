/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import AppCard from "../AppCard";

const variants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const container = css({
  margin: "0 auto",
  maxWidth: 540,
  padding: "70px 20px",
  borderRadius: 10,
});

const OnlyCard: React.FC = ({ children }) => {
  return (
    <div css={container}>
      <motion.div
        variants={variants}
        initial="initial"
        animate="visible"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AppCard>{children}</AppCard>
      </motion.div>
    </div>
  );
};

export default OnlyCard;
