/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { marginBottom, marginRight } from "../lib/style/index";
import { calculationTime } from "../lib/calculationTime";

type Props = {
  name: string;
  content: string;
  update: string;
  images?: string[];
};

const card = css({
  border: "solid 1px #dbdbdb",
  backgroundColor: "#fff",
});

const body = css({
  display: "flex",
  alignItems: "flex-start",
  padding: "10px 15px",
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

const Tweet: React.FC<Props> = ({ name, content, update }) => {
  return (
    <div css={[card, marginBottom("large")]}>
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

export default Tweet;
