/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { padding, hover } from "../../utils/index";
import { color } from "../../utils/constants";

type Props = {
  text: string;
  to: string;
};

const TabItem: React.FC<Props> = ({ text, to }) => {
  return (
    <li css={[item, hover("#fff")]}>
      <Link to={to} css={padding.all[3]}>
        {text}
      </Link>
    </li>
  );
};

const item = css({
  width: "100%",
  a: {
    display: "block",
    textAlign: "center",
    color: color.gray.dark,
    fontWeight: "bold",
  },
});

export { TabItem };
