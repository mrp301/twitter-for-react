/** @jsxImportSource @emotion/react */
import ReactLoading from "react-loading";
import { css } from "@emotion/react";

const LoadingIcon = () => {
  return (
    <div css={container}>
      <ReactLoading type="spin" height={32} width={32} />
    </div>
  );
};

const container = css({
  position: "relative",
  width: "100%",
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export { LoadingIcon };
