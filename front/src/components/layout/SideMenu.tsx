/** @jsxImportSource @emotion/react */
import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/index";
import { AuthContext } from "../AuthCotainer";
import { css } from "@emotion/react";

import { Button } from "../Button";
import { UserCard } from "../UserCard";

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
import { padding, margin, hover } from "../../utils/index";

const SideMenu: React.FC = () => {
  const {
    state: { user },
  } = useContext(AuthContext);
  const name = user.name;

  const [isballoonMenuVisble, setIsballoonMenuVisble] = useState(false);

  const pink = color.main.white;
  const to = useModal("/tweet");

  const ref = useRef(null);

  return (
    <aside css={container}>
      <ul css={navList}>
        <li css={hover()}>
          <Link to="/home">
            <Home color={pink} size={24} />
            <div css={margin.left[2]}>ホーム</div>
          </Link>
        </li>
        <li css={hover()}>
          <Link to="/notifications">
            <Notifications color={pink} size={24} />
            <div css={margin.left[2]}>通知</div>
          </Link>
        </li>
        <li css={hover()}>
          <Link to="/messages">
            <Messages color={pink} size={24} />
            <div css={margin.left[2]}>メッセージ</div>
          </Link>
        </li>
        <li css={hover()}>
          <Link to="/bookmarks">
            <Bookmarks color={pink} size={24} />
            <div css={margin.left[2]}>ブックマーク</div>
          </Link>
        </li>
        <li css={hover()}>
          <Link to="/search">
            <Search color={pink} size={24} />
            <div css={margin.left[2]}>検索</div>
          </Link>
        </li>
        <li css={hover()}>
          <Link to={`/user/${name}`}>
            <Profile color={pink} size={24} />
            <div css={margin.left[2]}>プロフィール</div>
          </Link>
        </li>
        <li css={hover()}>
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
      <div css={balloonMenuContainer}>
        <UserCard
          nickname={user.nickname}
          name={user.name}
          handleClick={() => setIsballoonMenuVisble(true)}
          css={[padding.all[2], hover()]}
        />
        {isballoonMenuVisble && (
          <div ref={ref} css={[balloonMenu, padding.y[2]]}>
            <UserCard nickname={user.nickname} name={user.name} css={[padding.all[3]]} />
            <ul css={balloonMenuList}>
              <li css={[padding.x[3], padding.y[4], hover(color.main.pink)]}>
                @{user.name}からログアウト
              </li>
              <li
                css={[padding.all[3], hover(color.main.pink)]}
                onClick={() => setIsballoonMenuVisble(false)}
              >
                <div css={balloonMenuClose}>閉じる</div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};

const container = [
  padding.top[8],
  padding.bottom[3],
  css({
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "sticky",
    top: "0",
    left: "0",
    height: "100vh",
    minWidth: "100px",
    borderRight: `solid 1px ${color.main.white}`,
    backgroundColor: color.main.pink,
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
        color: color.main.white,
        fontWeight: "bold",
        svg: { flex: "0 0 auto" },
      },
    ],
  },
});

const balloonMenuContainer = css({
  position: "relative",
});

const balloonMenu = css({
  position: "absolute",
  top: "-180px",
  left: "8px",
  width: 320,
  borderRadius: 12,
  backgroundColor: "#fff",
  boxShadow: "rgb(0 0 0 / 10%) 0 0 15px, rgb(0 0 0 / 5%) 0 0 3px 1px",
});

const balloonMenuList = css({
  borderTop: `solid 1px ${color.gray.light}`,
  li: {
    fontSize: "12px",
    "&:hover": {
      cursor: "pointer",
    },
    ":not(:last-of-type)": {
      borderBottom: `solid 1px ${color.gray.light}`,
    },
  },
});

const balloonMenuClose = css({
  textAlign: "center",
  fontSize: "12px",
  color: color.gray.dark,
});

export { SideMenu };
