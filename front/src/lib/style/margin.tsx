/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Size = "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";

const sizeTypes = {
  small: 5,
  medium: 10,
  large: 15,
  xlarge: 20,
  xxlarge: 25,
  xxxlarge: 30,
};

const property = (type: "Bottom" | "Right", size: Size) => {
  const style = css({
    [`margin${type}`]: sizeTypes[size],
  });
  return style;
};

const marginBottom = (size: Size) => {
  return property("Bottom", size);
};

const marginRight = (size: Size) => {
  return property("Right", size);
};

export { marginBottom, marginRight };
