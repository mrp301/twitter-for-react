/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

// images
import tile from "../../images/girls_tile.png";

const defaultStyle = css`
  html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.5rem;
    min-height: 100vh;
    background-image: url(${tile});
    background-size: 130px;
  }

  main {
    margin: 32px auto;
    padding: 0 32px;
    max-width: 1000px;
  }

  button {
    border: 0;
  }

  input:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }
  .inner {
    padding: 15px;
    background-color: #fff;
  }
`;

export default defaultStyle;
