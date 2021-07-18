/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useContext } from "react";
import { css } from "@emotion/react";

// hooks
import { useTweets } from "../hooks/index";

// style
import { padding, margin } from "../utils/index";
import { color } from "../utils/constants/index";

// modules
import { $axios } from "../lib/axios";

// components
import Head from "../components/Head";
import AppInput from "../components/form/AppInput";
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
  const tweets = useTweets();
  const { state } = useContext(AuthContext);
  const user = state.user;

  const sendTweet = async (): Promise<void> => {
    const params = {
      user_id: user.id,
      content: tweet,
    };
    try {
      await $axios.post("tweets", params);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head title="ホーム" />
      <Layout>
        <main css={main}>
          <div css={[tlHeader, padding.all[4]]}>ホーム</div>
          <div css={tweetContainer}>
            <div css={[tweetInner, margin.bottom[2]]}>
              <UserIcon userId="emo" size="nomal" />
              <AppInput
                key="tweet"
                name="tweet"
                value={tweet}
                setValue={setTweet}
                placeholder="いまどうしてる？"
                type="textarea"
              />
            </div>
            <div css={inputContainer}>
              <Button type="primary" size="nomal" handleClick={sendTweet}>
                ツイートする
              </Button>
            </div>
          </div>
          <TweetList tweets={tweets} />
        </main>
      </Layout>
    </>
  );
};

const main = css({
  width: "100%",
  margin: 0,
  padding: 0,
});

const tlHeader = css({
  fontWeight: "bold",
  textAlign: "left",
  borderBottom: `solid 1px ${color.gray.dark}`,
});

const tweetContainer = [
  padding.y[2],
  padding.left[4],
  padding.right[4],
  css({
    borderBottom: `solid 1px ${color.gray.dark}`,
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
