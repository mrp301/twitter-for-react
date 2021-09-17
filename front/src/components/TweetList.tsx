import React from "react";

import { TweetItem, Tweet } from "./TweetItem";
import { SlideIn } from "./motion/index";

import { LoadingIcon } from "./LoadingIcon";

type Props = {
  tweets: Tweet[];
};

const TweetList: React.FC<Props> = React.memo(({ tweets }) => {
  return (
    <>
      {tweets.length ? (
        <SlideIn>
          {tweets.map((tweet, index) => (
            <TweetItem
              key={index}
              id={tweet.id}
              name={tweet.name}
              nickname={tweet.nickname}
              content={tweet.content}
              updatedAt={tweet.updatedAt}
            />
          ))}
        </SlideIn>
      ) : (
        <LoadingIcon />
      )}
    </>
  );
});

export { TweetList };
