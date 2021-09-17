/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";

// hooks
import { useAllTweets } from "../hooks/index";

// style
import { padding, margin } from "../utils/index";
import { color } from "../utils/constants/index";

// modules
import { sendTweet } from "../lib/index";

// components
import Head from "../components/Head";
import { TextArea } from "../components/form/index";
import { Button } from "../components/Button";
import { TweetList } from "../components/TweetList";
import { AuthContext } from "../components/AuthCotainer";
import { Layout } from "../components/layout/index";
import { UserIcon } from "../components/UserIcon";

type Props = {
  handleSetLogin?: Function;
};

const Home: React.FC<Props> = () => {
  const [tweet, setTweet] = useState("");
  const { state } = useContext(AuthContext);
  const user = state.user;
  const { tweets } = useAllTweets();

  const history = useHistory();

  const handleClick = async (): Promise<void> => {
    if (tweet === "") {
      alert("テキストを入力してください。");
      return;
    }
    await sendTweet(user.id, user.name, tweet);
    setTweet("");
    history.push("/home");
  };

  return (
    <>
      <Head title="ホーム" />
      <Layout heading="ホーム（すべてのツイート）">
        <>
          <div css={tweetContainer}>
            <div css={[tweetInner, margin.bottom[2]]}>
              <UserIcon userId="emo" size="nomal" />
              <TextArea
                key="tweet"
                name="tweet"
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
                placeholder="いまどうしてる？"
              />
            </div>
            <div css={inputContainer}>
              <Button color="primary" size="nomal" handleClick={handleClick}>
                ツイートする
              </Button>
            </div>
          </div>
          <TweetList tweets={tweets} />
        </>
      </Layout>
    </>
  );
};

const tweetContainer = [
  padding.top[6],
  padding.bottom[5],
  padding.x[4],
  css({
    borderBottom: `solid 1px ${color.main.white}`,
  }),
];

const tweetInner = css({
  display: "flex",
  alignItems: "flex-start",
});

const inputContainer = css({
  textAlign: "right",
});

export { Home };
