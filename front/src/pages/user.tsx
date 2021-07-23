/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthCotainer";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useTweets } from "../hooks/index";

import Head from "../components/Head";
import { Layout } from "../components/layout/index";
import { TweetList } from "../components/TweetList";
import { UserProfile } from "../components/UserProfile";

import { color } from "../utils/constants/index";

type Props = {
  handleSetLogin?: Function;
};

const User: React.FC<Props> = () => {
  const { id } = useParams<{ id?: string }>();
  const { state } = useContext(AuthContext);
  const user = state.user;

  const { tweets } = useTweets(user.id);

  return (
    <>
      <Head title={`${user.nickname}（@${id}）`} />
      <Layout>
        <div css={cover}></div>
        <UserProfile user={user} />
        <TweetList tweets={tweets} />
      </Layout>
    </>
  );
};

const cover = css({
  height: "130px",
  backgroundColor: color.main.blue,
});

export { User };
