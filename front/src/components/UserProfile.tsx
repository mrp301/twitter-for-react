/** @jsxImportSource @emotion/react */
import React from "react";
import { useModal } from "../hooks/index";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

// utils
import { padding, margin } from "../utils/index";
import { color, spacing } from "../utils/constants/index";

// components
import { Button } from "./Button";
import { UserIcon } from "./UserIcon";
import { Tab } from "./tab/index";

import { User } from "../types";

type Props = {
  user: User;
};

const UserProfile: React.FC<Props> = ({ user }) => {
  const name = "emo";
  const tabs = ["ツイート", "ツイートと返信", "メディア", "いいね"];
  const to = useModal("/profile");

  return (
    <div css={[container]}>
      <div css={padding.all[4]}>
        <UserIcon userId={name} size="large" css={icon} />
        <Link to={to}>
          <Button type="nomal" css={changeButton}>
            変更
          </Button>
        </Link>
        <div css={margin.bottom[4]}>
          <div css={[userName, margin.bottom[2]]}>{user.nickname}</div>
          <div css={userId}>@{user.name}</div>
        </div>
        {!!user.profile && <p css={[propfileText, margin.bottom[4]]}>{user.profile}</p>}
        <div>100 フォロー中</div>
      </div>
      <Tab tabs={tabs} />
    </div>
  );
};

const container = css({
  position: "relative",
  paddingTop: "28px",
});

const icon = css({
  position: "absolute",
  top: -31,
});

const changeButton = css({
  position: "absolute",
  top: Number(`${spacing[3].split("px")[0]}`),
  right: Number(`${spacing[3].split("px")[0]}`),
});

const userName = css({
  fontWeight: "bold",
  fontSize: 16,
});

const userId = css({
  color: color.gray.dark,
  fontSize: 12,
});

const propfileText = css({
  fontSize: 15,
  lineHeight: 1.2,
});

export { UserProfile };
