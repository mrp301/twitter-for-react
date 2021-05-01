/** @jsxImportSource @emotion/react */
import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import colorCodes from "../utils/colorCodes";

type Props = {
  type: "nomal" | "primary";
  handleClick?: Function;
  children: React.ReactNode;
  cssProps?: SerializedStyles;
};

const appButton: React.FC<Props> = ({ children, type, handleClick }) => {
  const buttonType = {
    nomal: {
      color: colorCodes.primary,
      border: `solid 2px ${colorCodes.primary}`,
      backgroundColor: colorCodes.base,
    },
    primary: {
      color: "#fff",
      backgroundColor: colorCodes.primary,
    },
  };

  const button = css({
    display: "block",
    padding: "15px 20px",
    width: "100%",
    maxWidth: 150,
    minWidth: 300,
    fontSize: "1.3rem",
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 48,
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
    ...buttonType[type],
  });

  return (
    <>
      {handleClick ? (
        <button css={button} onClick={() => handleClick()}>
          {children}
        </button>
      ) : (
        <button css={button}>{children}</button>
      )}
    </>
  );
};

export default appButton;
