import { useState, useEffect } from "react";
import { $axios } from "../lib/axios";

import { Tweet } from "../components/TweetItem";

const useTweets = <T,>(userId: T) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  // https://takamints.hatenablog.jp/entry/cleanup-an-async-use-effect-hook-of-react-function-componet
  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res = await $axios.get(`tweets/${userId}/mytweet`);
        setTweets(res.data.data);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [userId]);

  return { tweets, setTweets };
};

export { useTweets };
