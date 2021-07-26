/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { TabItem } from "./index";

type Props = {
  tabs: {
    text: string;
    to: string;
    key: string;
  }[];
};

const Tab: React.FC<Props> = ({ tabs }) => {
  return (
    <nav>
      <ul css={container}>
        {tabs.map(({ text, to, key }) => (
          <TabItem key={key} text={text} to={to} />
        ))}
      </ul>
    </nav>
  );
};

const container = css({
  display: "flex",
});

export { Tab };
