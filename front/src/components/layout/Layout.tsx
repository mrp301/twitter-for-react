/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useModal } from "../../hooks/index";

import { SideMenu } from "./index";
import { screen } from "../../utils/index";
import { color } from "../../utils/constants/index";

const Layout: React.FC = ({ children }) => {
  return (
    <div css={container}>
      <SideMenu />
      <div css={colomun}>{children}</div>
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

const colomun = css({
  margin: "0 auto",
  width: "100%",
  minHeight: "100vh",
  borderRight: `solid 1px ${color.gray.dark}`,
});

export { Layout };
