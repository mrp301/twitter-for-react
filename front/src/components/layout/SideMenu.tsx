/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/index";
import { AuthContext } from "../AuthCotainer";
import { css } from "@emotion/react";

import { Button } from "../Button";

import {
  Bookmarks,
  Home,
  Messages,
  Notifications,
  Profile,
  Search,
  Setting,
} from "../icon/index";

import { color } from "../../utils/constants/index";
import { padding, margin } from "../../utils/index";

const SideMenu: React.FC = () => {
  const {
    state: { user },
  } = useContext(AuthContext);
  const name = user.name;
  const pink = color.main.pink;
  const to = useModal("/tweet");

  return (
    <aside css={container}>
      <ul css={navList}>
        <li>
          <Link to="/home">
            <Home color={pink} size={24} />
            <div css={margin.left[2]}>ホーム</div>
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <Notifications color={pink} size={24} />
            <div css={margin.left[2]}>通知</div>
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <Messages color={pink} size={24} />
            <div css={margin.left[2]}>メッセージ</div>
          </Link>
        </li>
        <li>
          <Link to="/bookmarks">
            <Bookmarks color={pink} size={24} />
            <div css={margin.left[2]}>ブックマーク</div>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Search color={pink} size={24} />
            <div css={margin.left[2]}>検索</div>
          </Link>
        </li>
        <li>
          <Link to={`/user/${name}`}>
            <Profile color={pink} size={24} />
            <div css={margin.left[2]}>プロフィール</div>
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <Setting color={pink} size={24} />
            <div css={margin.left[2]}>設定</div>
          </Link>
        </li>
        <li css={margin.top[4]}>
          <Link to={to}>
            <Button type="primary" size="full">
              ツイートする
            </Button>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

const container = [
  padding.x[4],
  padding.bottom[2],
  css({
    flex: "0 0 auto",
    position: "sticky",
    top: "0",
    left: "0",
    minHeight: "100vh",
    minWidth: "100px",
    borderRight: `solid 1px ${color.gray.dark}`,
  }),
];

const navList = css({
  textAlign: "center",
  li: {
    a: [
      padding.all[4],
      {
        display: "flex",
        alignItems: "center",
        color: color.main.pink,
        fontWeight: "bold",
        svg: { flex: "0 0 auto" },
      },
    ],
  },
});

export { SideMenu };
