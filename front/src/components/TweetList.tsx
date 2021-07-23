/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import ReactLoading from "react-loading";

import { TweetItem, Tweet } from "./TweetItem";
import { SlideIn } from "./motion/index";

import { padding } from "../utils/index";

type Props = {
  tweets: Tweet[];
};

const TweetList: React.FC<Props> = React.memo(({ tweets }) => {
  console.log(tweets);
  return (
    <>
      {tweets.length ? (
        <SlideIn>
          {tweets.map((tweet) => (
            <TweetItem
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}
              nickname={tweet.nickname}
              content={tweet.content}
              updatedAt={tweet.updatedAt}
            />
          ))}
        </SlideIn>
      ) : (
        <ReactLoading type="spin" height={32} width={32} css={loading} />
      )}
    </>
  );
});

const loading = css([
  padding.all[4],
  {
    margin: "0 auto",
  },
]);

export { TweetList };
