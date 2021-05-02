/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import colorCodes from "../../utils/colorCodes";

const header = css`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 40px;
  background-color: ${colorCodes.primary};
  *:not(:last-child) {
    margin-right: 20px;
  }
`;

const theHeader: React.FC = () => {
  return (
    <header css={header}>
      <h1>プリスタグラム</h1>
      <Link to="/home">home</Link>
      <Link to="/">index</Link>
      <Link to="/user">User</Link>
    </header>
  );
};

export default theHeader;
