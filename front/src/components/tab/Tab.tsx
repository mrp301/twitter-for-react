/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { TabItem } from "./index";

import { color } from "../../utils/constants";

type Props = {
  tabs: string[];
};

const Tab: React.FC<Props> = ({ tabs }) => {
  return (
    <nav>
      <ul css={container}>
        {tabs.map((tab) => (
          <TabItem key={tab} text={tab} />
        ))}
      </ul>
    </nav>
  );
};

const container = css({
  display: "flex",
  borderBottom: `solid 1px ${color.gray.dark}`,
});

export { Tab };
