/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

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
import { padding } from "../../utils/index";

const SideMenu: React.FC = () => {
  const pink = color.main.pink;

  return (
    <aside css={container}>
      <ul css={navList}>
        <li>
          <Link to="/home">
            <Home color={pink} size={24} />
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <Messages color={pink} size={24} />
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <Notifications color={pink} size={24} />
          </Link>
        </li>
        <li>
          <Link to="/bookmarks">
            <Bookmarks color={pink} size={24} />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Search color={pink} size={24} />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Profile color={pink} size={24} />
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <Setting color={pink} size={24} />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

const container = [
  padding.bottom[2],
  css({
    position: "sticky",
    top: "0",
    left: "0",
    minHeight: "100vh",
    width: "100px",
    borderRight: `solid 1px ${color.gray.dark}`,
  }),
];

const navList = css({
  textAlign: "center",
  li: {
    a: [padding.all[4], { display: "block" }],
  },
});

export { SideMenu };
