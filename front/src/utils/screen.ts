import { css, SerializedStyles } from "@emotion/react";

type Screen = {
  [k in "sm" | "md" | "lg"]: SerializedStyles;
};

const screen: Screen = {
  sm: css({ maxWidth: "640px" }),
  md: css({ maxWidth: "768px" }),
  lg: css({ maxWidth: "1024px" }),
};

export { screen };
