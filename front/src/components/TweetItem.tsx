/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { marginBottom, marginRight } from "../lib/style/index";
import { padding } from "../utils/index";
import { color } from "../utils/constants/index";
import { calculationTime } from "../lib/calculationTime";

import { UserIcon } from "../components/UserIcon";

export type Tweet = {
  id: number;
  userId: number;
  content: string;
  updatedAt: string;
  images?: string[];
};

const TweetItem: React.FC<Tweet> = (props) => {
  const { userId, content, updatedAt } = props;
  const name = "emo";

  return (
    <div css={contaiiner}>
      <div css={body}>
        <UserIcon userId={name} css={marginRight("medium")} />
        <div css={content}>
          <div css={marginBottom("small")}>
            <span css={[userName, marginRight("medium")]}>{userId}</span>
            <span css={updateAt}>{calculationTime(updatedAt)}</span>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

const contaiiner = [
  padding.y[2],
  padding.left[4],
  padding.right[4],
  css({
    borderBottom: `solid 1px ${color.gray.dark}`,
  }),
];

const body = css({
  display: "flex",
  alignItems: "flex-start",
});

const updateAt = css({
  color: color.gray.dark,
  fontSize: 12,
});

const userName = css({
  fontWeight: "bold",
});

export { TweetItem };
