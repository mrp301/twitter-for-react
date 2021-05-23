/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useContext } from "react";
import { css } from "@emotion/react";

// modules
import { $axios } from "../lib/axios";

// components
import AppInput from "../components/form/AppInput";
import AppButton from "../components/AppButton";
import Head from "../components/Head";
import Layout from "../components/layout/Layout";
import Tweet from "../components/Tweet";
import { AuthContext } from "../components/AuthCotainer";

type Props = {
  handleSetLogin?: Function;
};

type Tl = {
  data: {
    data: [
      {
        id: string;
        userId: string;
        content: string;
        createdAt: string;
        updatedAt: string;
      }
    ];
  };
};

const colomun = css({
  margin: "0 auto",
  width: 600,
});

const main = css({
  width: "100%",
  margin: 0,
  padding: 0,
});

const Home: React.FC<Props> = () => {
  const [tweet, setTweet] = useState("");
  const [tl, setTL] = useState<Tl | "">("");

  const { state } = useContext(AuthContext);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res: Tl = await $axios.get("tweets");
        setTL(res);
      }
    })();
    // https://takamints.hatenablog.jp/entry/cleanup-an-async-use-effect-hook-of-react-function-componet

    return () => {
      unmounted = true;
    };
  }, []);

  const sendTweet = async (): Promise<void> => {
    const params = {
      user_id: state.user.id,
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
        <div css={colomun}>
          <main css={main}>
            {!!tl &&
              tl.data.data.map((tweet) => (
                <Tweet
                  key={tweet.id}
                  name="emo"
                  content={tweet.content}
                  update={tweet.updatedAt}
                />
              ))}
            <AppInput
              key="tweet"
              name="tweet"
              value={tweet}
              setValue={setTweet}
              placeholder="いまどうしてる？"
              type="text"
            />
            <AppButton type="nomal" handleClick={sendTweet}>
              ツイートする
            </AppButton>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Home;
