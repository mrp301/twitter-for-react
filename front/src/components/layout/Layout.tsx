/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { SideMenu } from "./index";
import { screen } from "../../utils/index";

const Layout: React.FC = ({ children }) => {
  return (
    <div css={container}>
      <SideMenu />
      {children}
    </div>
  );
};

const container = css([
  screen.md,
  {
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
  },
]);

export { Layout };
