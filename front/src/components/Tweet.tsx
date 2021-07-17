/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { marginBottom, marginRight } from "../lib/style/index";
import { padding } from "../utils/index";
import { color } from "../utils/constants/index";
import { calculationTime } from "../lib/calculationTime";

type Props = {
  name: string;
  content: string;
  update: string;
  images?: string[];
};

const Tweet: React.FC<Props> = ({ name, content, update }) => {
  return (
    <div css={contaiiner}>
      <div css={body}>
        <div css={[userIcon, marginRight("medium")]}>
          <img src={`${process.env.PUBLIC_URL}/user/${name}Icon.png`} alt={name} />
        </div>
        <div css={content}>
          <div css={marginBottom("small")}>
            <span css={[userName, marginRight("medium")]}>{name}</span>
            <span css={updateAt}>{calculationTime(update)}</span>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

const contaiiner = [
  padding.all[2],
  css({
    borderBottom: `solid 1px ${color.gray.dark}`,
  }),
];

const body = css({
  display: "flex",
  alignItems: "flex-start",
});

const userIcon = css({
  flex: "0 0 auto",
  width: 42,
  height: 42,
  borderRadius: "50%",
  overflow: "hidden",
  "& > img": {
    width: "100%",
  },
});

const updateAt = css({
  fontSize: 12,
  color: "#8e8e8e",
});

const userName = css({
  fontWeight: "bold",
});

export { Tweet };
