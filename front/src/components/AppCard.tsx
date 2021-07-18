/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

type Props = {
  type?: "nomal" | "primary";
  children: React.ReactNode;
};

const card = css({
  display: "block",
  border: "solid 1px #dbdbdb",
  padding: "30px 20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
});

const appCard: React.FC<Props> = ({ children }) => {
  return (
    <motion.div layout css={card}>
      {children}
    </motion.div>
  );
};

export default appCard;
