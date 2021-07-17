/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Size = "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";

const sizeTypes = {
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 28,
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
