/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { padding } from "../../utils/index";
import { color } from "../../utils/constants";

type Props = {
  text: string;
};

const TabItem: React.FC<Props> = ({ text }) => {
  return <li css={[padding.all[3], item]}>{text}</li>;
};

const item = css({
  width: "100%",
  textAlign: "center",
  color: color.gray.dark,
  fontWeight: "bold",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.8,
  },
});

export { TabItem };
