/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

// components
import { UserIcon } from "./UserIcon";

// lib
import { padding, margin } from "../utils/index";
import { color } from "../utils/constants/index";

import { User } from "../types";

type Props = {
  nickname: string;
  name: string;
  handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
};

const UserCard: React.FC<Props> = ({ nickname, name, handleClick, className }) => {
  return (
    <div css={userCard} className={className} onClick={handleClick}>
      <UserIcon userId="emo" size="nomal" />
      <div>
        <div css={[userName, margin.bottom[1]]}>{nickname}</div>
        <div css={userId}>@{name}</div>
      </div>
    </div>
  );
};

const userCard = css({
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
});

const userName = css({
  fontWeight: "bold",
});

const userId = css({
  color: color.gray.dark,
});

export { UserCard };
