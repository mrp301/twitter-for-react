/** @jsxImportSource @emotion/react */
import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import colorCodes from "../utils/colorCodes";

type Props = {
  type: "nomal" | "primary";
  handleClick?: Function;
  children: React.ReactNode;
  cssProps?: SerializedStyles;
  className?: string;
};

const appButton: React.FC<Props> = ({ children, type, handleClick, className }) => {
  const buttonType = {
    nomal: {
      color: "#1b1b1b",
      backgroundColor: "#eaeaea",
    },
    primary: {
      color: "#fff",
      backgroundColor: colorCodes.primary,
    },
  };

  const button = css({
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

  return (
    <>
      {handleClick ? (
        <button className={className} css={button} onClick={() => handleClick()}>
          {children}
        </button>
      ) : (
        <button className={className} css={button}>
          {children}
        </button>
      )}
    </>
  );
};

export default appButton;
