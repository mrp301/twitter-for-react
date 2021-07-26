/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import hexToRgba from "hex-to-rgba";

import { padding } from "../utils/index";
import { color } from "../utils/constants/index";

type Size = "full" | "nomal";
type Color = "primary" | "secondary" | "nomal";

type Props = {
  type?: "button" | "reset" | "submit";
  size?: Size;
  color?: Color;
  handleClick?: Function;
  className?: string;
};

const Button: React.FC<Props> = ({
  children,
  type = "button",
  size = "full",
  color = "nomal",
  handleClick,
  className,
}) => {
  return !!handleClick ? (
    <button
      type={type}
      css={style(size, color)}
      className={className}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  ) : (
    <button css={style(size, color)} className={className}>
      {children}
    </button>
  );
};

const theme = {
  primary: css({
    color: color.main.white,
    backgroundColor: color.main.pink,
    "&:hover": {
      backgroundColor: hexToRgba(color.main.pink, 0.8),
    },
  }),
  secondary: css({
    color: color.main.white,
    backgroundColor: color.main.blue,
    "&:hover": {
      backgroundColor: hexToRgba(color.main.blue, 0.8),
    },
  }),
  nomal: css({
    border: `solid 2px ${color.main.pink}`,
    color: color.main.pink,
  }),
};

const scale = {
  nomal: {
    paddingRight: 18,
    paddingLeft: 18,
  },
  full: {
    display: "block",
    width: "100%",
  },
};

const style = (size: Size, color: Color) => [
  padding.all[3],
  scale[size],
  theme[color],
  css({
    fontSize: "1.3rem",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 48,
  }),
];

export { Button };
