/** @jsxImportSource @emotion/react */
import React from "react";
import { Global } from "@emotion/react";

import resetStyle from "./ResetStyle";
import marginStyle from "./MarginStyle";
import defaultStyle from "./DefaultStyle";

const GlobalStyle = () => <Global styles={[resetStyle, defaultStyle, marginStyle]} />;

export default GlobalStyle;
