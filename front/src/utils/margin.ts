import { css, SerializedStyles } from "@emotion/react";
import { spacing } from "./constants/index";

type Type = "all" | "x" | "y" | "top" | "bottom" | "left" | "right";
type Spacing = keyof typeof spacing;
type Margin = {
  [k in Type]: {
    [k in Spacing]: SerializedStyles;
  };
};
type CreateStyle = (key: Spacing, type: Type) => { [k in Spacing]: SerializedStyles };

const createStyle: CreateStyle = (key, type) => {
  if (type === "all") {
    return {
      [key]: css({
        margin: spacing[key],
      }),
    };
  }
  if (type === "y") {
    return {
      [key]: css({
        marginTop: `${spacing[key]}`,
        marginBottom: `${spacing[key]}`,
      }),
    };
  }
  if (type === "x") {
    return {
      [key]: css({
        marginRight: `${spacing[key]}`,
        marginLeft: `${spacing[key]}`,
      }),
    };
  }
  if (type === "top") {
    return {
      [key]: css({
        marginTop: spacing[key],
      }),
    };
  }
  if (type === "bottom") {
    return {
      [key]: css({
        marginBottom: spacing[key],
      }),
    };
  }
  if (type === "left") {
    return {
      [key]: css({
        marginLeft: spacing[key],
      }),
    };
  }
  if (type === "right") {
    return {
      [key]: css({
        marginRight: spacing[key],
      }),
    };
  }
  throw new Error("typeの値が間違ってます。");
};

const createObject = (type: Type) => {
  const keys: Spacing[] = Object.keys(spacing).map(Number);

  return keys.reduce(
    (acc, key) => {
      const style = createStyle(key, type);

      return { ...acc, ...style };
    },
    { 0: css({ margin: 0 }) }
  );
};

const margin: Margin = {
  all: createObject("all"),
  x: createObject("x"),
  y: createObject("y"),
  top: createObject("top"),
  bottom: createObject("bottom"),
  right: createObject("right"),
  left: createObject("left"),
};

export { margin };
