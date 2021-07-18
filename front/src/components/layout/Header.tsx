/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { AuthContext } from "../AuthCotainer";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import { color } from "../../utils/constants/index";

const header = css({
  position: "sticky",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "15px 20px",
  marginBottom: 40,
  backgroundColor: color.primary,
  "*:not(:last-child)": {
    marginRight: 20,
  },
});

const headerNav = css({
  display: "flex",
  alignItems: "center",
  color: "#fff",
  li: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const headerLink = css({
  color: "#fff",
});

const userIcon = css({
  width: 22,
  height: 22,
  borderRadius: "50%",
  overflow: "hidden",
  "& > img": {
    width: "100%",
  },
});

const Header: React.FC = () => {
  const { state } = useContext(AuthContext);

  return (
    <header css={header}>
      <h1>
        <Link to="/home">
          <img
            src={`${process.env.PUBLIC_URL}/logo-white.png`}
            alt="Pristagram"
            width="120"
          />
        </Link>
      </h1>
      <ul css={headerNav}>
        <li>
          {state.user.id === 0 ? (
            <Link to="/login" css={headerLink}>
              ログイン
            </Link>
          ) : (
            <div>
              {state.user.id}:{state.user.nickname}@{state.user.name} / {state.user.email}
            </div>
          )}
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/icon/pencil.svg`}
            alt="ツイートする"
            width="22"
          />
        </li>
        <li>
          <div css={userIcon}>
            <img src={`${process.env.PUBLIC_URL}/user/emoIcon.png`} alt="emo" />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
