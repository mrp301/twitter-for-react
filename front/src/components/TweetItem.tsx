/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { padding, margin } from "../utils/index";
import { color } from "../utils/constants/index";
import { calculationTime } from "../lib/calculationTime";

import { UserIcon } from "../components/UserIcon";

export type Tweet = {
  id: number;
  name: string;
  nickname: string;
  content: string;
  updatedAt: string;
  images?: string[];
};

const TweetItem: React.FC<Tweet> = (props) => {
  const { name, nickname, content, updatedAt } = props;

  return (
    <div css={contaiiner}>
      <div css={body}>
        <Link to={`/user/${name}`}>
          <UserIcon userId="emo" css={margin.right[2]} />
        </Link>
        <div css={content}>
          <Link to={`/user/${name}`}>
            <div css={margin.bottom[2]}>
              <span css={[userName, margin.right[2]]}>{nickname}</span>
              <span css={[userId, margin.right[2]]}>@{name}</span>
              <span css={updateAt}>{calculationTime(updatedAt)}</span>
            </div>
          </Link>
          <div css={margin.bottom[4]}>{content}</div>
          {/* <div>リプ/いいね/</div> */}
        </div>
      </div>
    </div>
  );
};

const contaiiner = [
  padding.y[3],
  padding.x[4],
  css({
    fontSize: 15,
    borderBottom: `solid 1px ${color.gray.dark}`,
  }),
];

const body = css({
  display: "flex",
  alignItems: "flex-start",
});

const updateAt = css({
  color: color.gray.dark,
});

const userName = css({
  fontWeight: "bold",
  color: color.main.black,
  ":hover": {
    textDecoration: "underline",
  },
});

const userId = css({
  color: color.gray.dark,
});

export { TweetItem };
