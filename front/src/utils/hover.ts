import { css, SerializedStyles } from "@emotion/react";
import hexToRgba from "hex-to-rgba";

const hover = (color = "#fff"): SerializedStyles =>
  css({
    "&:hover": {
      cursor: "pointer",
      backgroundColor: hexToRgba(color, 0.25),
    },
  });

export { hover };
