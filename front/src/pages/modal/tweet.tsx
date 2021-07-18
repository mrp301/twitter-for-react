/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { css } from "@emotion/react";
import { padding } from "../../utils/index";

import { Modal } from "../../components/Modal";

const Tweet: React.FC = () => {
  return (
    <Modal headerText="ヘッダー" isScroll={true}>
      <div css={padding.all[4]}>モーダルモーダルモーダルモーダルモーダル</div>
    </Modal>
  );
};

export { Tweet };
