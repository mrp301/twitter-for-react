/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

// import { screen } from "../../utils/index";
import { SideMenu } from "./index";
import { padding } from "../../utils/index";
import { color } from "../../utils/constants/index";

type Props = {
  heading?: string;
};

const Layout: React.FC<Props> = ({ heading, children }) => {
  return (
    <div css={container}>
      <SideMenu />
      <main css={main}>
        {!!heading && <h2 css={[headingStyle, padding.y[4], padding.x[6]]}>{heading}</h2>}
        <div css={colomun}>{children}</div>
      </main>
    </div>
  );
};

type PropsPrfile = {
  heading?: React.ReactNode;
};

const LayoutProfile: React.FC<PropsPrfile> = ({ heading, children }) => {
  return (
    <div css={container}>
      <SideMenu />
      <main css={main}>
        {heading}
        <div css={colomun}>{children}</div>
      </main>
    </div>
  );
};

const container = css([
  // screen.md,
  {
    margin: "0 auto",
    display: "flex",
    alignItems: "flex-start",
  },
]);

const colomun = css({
  margin: "0 auto",
  width: "100%",
  maxWidth: "680px",
  minHeight: "100vh",
});

const main = css({
  width: "100%",
  margin: 0,
  padding: 0,
});

const headingStyle = css({
  fontWeight: "bold",
  textAlign: "left",
  backgroundColor: color.main.pinkLight,
});

export { Layout, LayoutProfile };
