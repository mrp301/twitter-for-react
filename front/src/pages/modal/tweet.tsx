/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import * as H from "history";

// utils
import { padding } from "../../utils/index";

// components
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/form/index";

const Tweet: React.FC = () => {
  const histroy: H.History = useHistory();
  const handleClose = (): void => {
    histroy.goBack();
  };

  const [tweet, setTweet] = useState<string>("");

  return (
    <Modal
      headerText="ヘッダー"
      isScroll={true}
      handleClose={handleClose}
      headerButton={<Button type="primary">ツイート</Button>}
    >
      <div css={padding.all[4]}>
        <TextArea
          key="tweet"
          name="tweet"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="いまどうしてる？"
        />
      </div>
    </Modal>
  );
};

export { Tweet };
