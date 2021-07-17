/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { color } from "../utils/constants/index";

type Props = {
  type: "nomal" | "primary";
  handleClick?: Function;
  children: React.ReactNode;
  className?: string;
};

const appButton: React.FC<Props> = ({ children, type, handleClick, className }) => {
  return (
    <>
      {handleClick ? (
        <button className={className} css={button(type)} onClick={() => handleClick()}>
          {children}
        </button>
      ) : (
        <button className={className} css={button(type)}>
          {children}
        </button>
      )}
    </>
  );
};

const buttonType = {
  nomal: {
    color: "#1b1b1b",
    backgroundColor: "#eaeaea",
  },
  primary: {
    color: "#fff",
    backgroundColor: color.primary,
  },
};

const button = (type: "nomal" | "primary") =>
  css({
    padding: "15px 20px",
    width: "100%",
    maxWidth: 150,
    minWidth: 300,
    fontSize: "1.3rem",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 48,
    ...buttonType[type],
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
  });

export default appButton;
