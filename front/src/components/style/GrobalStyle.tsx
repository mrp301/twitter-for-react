import React from "react";
import { Global } from "@emotion/react";

import resetStyle from "./ResetStyle";
import defaultStyle from "./DefaultStyle";

const GlobalStyle: React.FC = () => <Global styles={[resetStyle, defaultStyle]} />;

export default GlobalStyle;
