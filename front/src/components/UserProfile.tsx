/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { useModal } from "../hooks/index";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

// utils
import { padding, margin } from "../utils/index";
import { color, spacing } from "../utils/constants/index";
import { following } from "../lib/index";
import { useFolloingUsers } from "../hooks/index";

// components
import { AuthContext } from "./AuthCotainer";
import { Button } from "./Button";
import { UserIcon } from "./UserIcon";
import { Tab } from "./tab/index";

import { User } from "../types";

type Props = {
  user: User;
};

const UserProfile: React.FC<Props> = ({ user }) => {
  const { followUsers } = useFolloingUsers();
  const followCount = followUsers.length;

  const { state } = useContext(AuthContext);
  const tabs = [
    {
      text: "ツイート",
      to: `/user/${state.user.name}/`,
      key: "tweet",
    },
    {
      text: "フォロー",
      to: `/user/${state.user.name}/follow`,
      key: "follow",
    },
    {
      text: "フォロワー",
      to: `/user/${state.user.name}/follow`,
      key: "follower",
    },
    {
      text: "いいね",
      to: `/user/${state.user.name}/`,
      key: "fav",
    },
  ];
  const to = useModal("/profile");

  const handleClick = (followUserId: number) => {
    const userId = state.user.id;
    following(userId, followUserId);
  };

  return (
    <div css={[container]}>
      <div css={padding.all[4]}>
        <UserIcon size="large" css={icon} />
        {state.user.id === user.id ? (
          <Link to={to}>
            <Button size="nomal" color="secondary" css={changeButton}>
              変更
            </Button>
          </Link>
        ) : (
          <Button
            size="nomal"
            color="primary"
            css={changeButton}
            handleClick={() => handleClick(user.id)}
          >
            フォローする
          </Button>
        )}
        <div css={margin.bottom[4]}>
          <div css={[userName, margin.bottom[2]]}>{user.nickname}</div>
          <div css={userId}>@{user.name}</div>
        </div>
        {!!user.profile && <p css={[propfileText, margin.bottom[4]]}>{user.profile}</p>}
        <div>
          <span css={followNumber}>{followCount}</span> フォロー中
        </div>
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

const followNumber = css({
  fontWeight: "bold",
});

export { UserProfile };
