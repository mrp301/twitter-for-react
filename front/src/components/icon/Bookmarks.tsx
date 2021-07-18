import React from "react";
import { CreateSvg, Props } from "./CreateSvg";

export const Bookmarks: React.FC<Props> = ({ color, size }) => (
  <CreateSvg color={color} size={size}>
    <path
      d="M463.511,0H27.022v512L256,361.971l228.978,150.023V0H463.511z M256,310.645L69.955,432.534V42.933h372.089
            v389.601L256,310.645z"
    />
  </CreateSvg>
);
