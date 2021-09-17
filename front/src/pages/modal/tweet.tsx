/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as H from "history";

// utils
import { padding } from "../../utils/index";
import { sendTweet } from "../../lib/index";

// components
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/form/index";
import { AuthContext } from "../../components/AuthCotainer";

const Tweet: React.FC = () => {
  const histroy: H.History = useHistory();
  const handleClose = (): void => {
    histroy.goBack();
  };
  const [tweet, setTweets] = useState<string>("");
  const { state } = useContext(AuthContext);
  const user = state.user;

  const handleClick = async (): Promise<void> => {
    if (tweet === "") {
      alert("テキストを入力してください。");
      return;
    }
    await sendTweet(user.id, user.name, tweet);
    setTweets("");
    histroy.goBack();
  };

  return (
    <Modal
      headerText="ツイートの投稿"
      isScroll={true}
      handleClose={handleClose}
      headerButton={
        <Button color="primary" size="nomal" handleClick={handleClick}>
          ツイートする
        </Button>
      }
    >
      <div css={padding.all[4]}>
        <TextArea
          key="tweet"
          name="tweet"
          value={tweet}
          onChange={(e) => setTweets(e.target.value)}
          placeholder="いまどうしてる？"
        />
      </div>
    </Modal>
  );
};

export { Tweet };
