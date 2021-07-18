/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { color } from "../utils/constants/index";
import { motion } from "framer-motion";

const container = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: color.primary,
});

const visible = {
  opacity: 0,
};

const Loading: React.FC = () => {
  return (
    <motion.div
      animate={visible}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      css={container}
    >
      <p>ローディング</p>
    </motion.div>
  );
};

export default Loading;
