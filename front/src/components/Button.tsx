/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { padding } from "../utils/index";
import { color } from "../utils/constants/index";

type Type = "nomal" | "primary";

type Props = {
  type: Type;
  size?: "full" | "nomal" | "medium" | "large";
  handleClick?: Function;
  className?: string;
};

const Button: React.FC<Props> = ({ children, type, size = "nomal", handleClick }) => {
  return !!handleClick ? (
    <button css={button(type, size)} onClick={() => handleClick()}>
      {children}
    </button>
  ) : (
    <button css={button(type, size)}>{children}</button>
  );
};

const buttonType = {
  nomal: {
    color: color.main.pink,
    border: `solid 2px ${color.main.pink}`,
  },
  primary: {
    color: "#fff",
    border: `solid 1px ${color.main.pink}`,
    backgroundColor: color.main.pink,
  },
};

const button = (type: Type, size = "nomal") => [
  padding.all[3],
  css({
    display: size === "full" ? "block" : "inlineBlock",
    width: size === "full" ? "100%" : "auto",
    fontSize: "1.3rem",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 48,
    ...buttonType[type],
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
  }),
];

export { Button };
