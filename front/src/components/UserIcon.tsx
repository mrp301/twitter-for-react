/** @jsxImportSource @emotion/react */
import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import { marginRight } from "../lib/style/index";

type Size = "nomal" | "large";
type Icon = (size: Size) => SerializedStyles;
type Props = {
  userId: string;
  size?: Size;
  className?: string;
};

const UserIcon: React.FC<Props> = ({ userId, size = "nomal", className }) => {
  return (
    <div css={[icon(size), marginRight("medium")]} className={className}>
      <img src={`${process.env.PUBLIC_URL}/user/${userId}Icon.png`} alt={userId} />
    </div>
  );
};

const icon: Icon = (size) => {
  const property = {
    nomal: 42,
    large: 62,
  };

  return css({
    flex: "0 0 auto",
    width: property[size],
    height: property[size],
    borderRadius: "50%",
    overflow: "hidden",
    "& > img": {
      width: "100%",
    },
  });
};

export { UserIcon };
