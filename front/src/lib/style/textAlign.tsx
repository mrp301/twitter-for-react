/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const textAlign = (type: "center" | "left" | "right" = "center") => {
  const style = css({
    textAlign: type,
  });
  return style;
};

export { textAlign };
