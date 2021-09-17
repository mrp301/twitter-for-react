import { useState, useEffect } from "react";
import { $axios } from "../lib/axios";
import { useLocation, useParams } from "react-router-dom";

import { Tweet } from "../components/TweetItem";

const useTweets = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const { id }: { id: string } = useParams();

  // https://takamints.hatenablog.jp/entry/cleanup-an-async-use-effect-hook-of-react-function-componet
  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res = await $axios.get(`tweets/${id}/mytweet`);
        setTweets(res.data.data);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [id]);

  return { tweets, setTweets };
};

const useAllTweets = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const location = useLocation();

  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res = await $axios.get("tweets");
        setTweets(res.data.data);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [location]);

  return { tweets, setTweets };
};

export { useTweets, useAllTweets };
