import React, { useState, useEffect } from "react";

// modules
import { $axios } from "../lib/axios";

// components
import AppInput from "../components/form/AppInput";
import AppButton from "../components/AppButton";
import Head from "../components/Head";

type Props = {
  handleSetLogin?: Function;
};

const Home: React.FC<Props> = () => {
  const [tweet, setTweet] = useState("");
  const [tl, setTL] = useState("");

  useEffect(() => {
    getTimeLine();
  }, [tl]);

  const getTimeLine = async (): Promise<void> => {
    try {
      setTL(await $axios.post("tweets"));
    } catch (error) {
      console.error(error);
    }
  };

  const handleTweet = async (): Promise<void> => {
    try {
      await $axios.post("tweets", tweet);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head title="ホーム" />
      <h1>タイムライン</h1>
      <AppInput
        key="tweet"
        name="tweet"
        value={tweet}
        setValue={setTweet}
        placeholder="いまどうしてる？"
      />
      <AppButton type="nomal" handleClick={handleTweet}>
        ツイートする
      </AppButton>
      {tl}
    </>
  );
};

export default Home;
