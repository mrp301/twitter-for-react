/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

import { padding, margin } from "../utils/index";
import { zindex, color } from "../utils/constants/index";

type Props = {
  headerText?: string;
  headerButton?: React.ReactNode;
  handleClose?: Function;
  isScroll?: boolean;
};

const Modal: React.FC<Props> = ({
  headerText,
  isScroll = false,
  handleClose,
  children,
  headerButton,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // document.body.style.position = "fixed";
    // document.body.style.overflow = "hidden";
    // document.body.style.top = `${window.pageYOffset.toString()}px`;
    console.log(window.pageYOffset.toString());

    return () => {
      document.body.style.position = "";
      document.body.style.overflow = "";
      document.body.style.top = "";
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <div css={overlay}></div>
          <div css={modalContainer}>
            <div css={modal}>
              {!!headerText && !!handleClose && (
                <div css={[modalHeader, padding.all[4]]}>
                  <div css={[close, margin.right[6]]} onClick={() => handleClose()}>
                    閉じる
                  </div>
                  <div css={modalTitle}>{headerText}</div>
                  {headerButton}
                </div>
              )}
              <div css={modalBody(isScroll)}>{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const overlay = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#000",
  opacity: 0.4,
  zIndex: zindex.overlay,
});

const modalContainer = css({
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  zIndex: zindex.modal,
});

const modal = css({
  position: "relative",
  width: "100%",
  maxWidth: 600,
  maxHeight: 650,
  borderRadius: 16,
  backgroundColor: "#fff",
});

const modalHeader = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `solid 1px ${color.gray.light}`,
  borderRadius: "16 16 0 0",
  overflow: "hidden",
});

const modalTitle = css({
  fontWeight: "bold",
  fonsSize: 18,
});

const close = css({
  "&:hover": {
    cursor: "pointer",
  },
});

const modalBody = (isScroll: boolean) =>
  css({
    overflowY: isScroll ? "scroll" : "unset",
    overflow: "hidden",
  });

export { Modal };
