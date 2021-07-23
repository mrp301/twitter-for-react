/** @jsxImportSource @emotion/react */
import { useState } from "react";
import hexToRgba from "hex-to-rgba";

import { color } from "../utils/constants/index";
import { css, SerializedStyles } from "@emotion/react";

const useInputFocus = () => {
  const [focus, setFocus] = useState<boolean>(false);

  const inputContainer = (): SerializedStyles =>
    css({
      position: "relative",
      width: "100%",
      borderRadius: 4,
      border: "solid 1px",
      boxShadow: focus ? `0 0 0 0.2rem ${hexToRgba(color.main.pink, 0.25)}` : "unset",
      borderColor: focus ? color.main.pink : color.gray.dark,
    });

  return { inputContainer, setFocus };
};

export { useInputFocus };
