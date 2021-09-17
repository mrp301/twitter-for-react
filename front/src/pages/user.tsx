/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useParams, Switch, Route } from "react-router-dom";
import { useTweets } from "../hooks/index";

// pages
import { FollowUsers } from "../pages/user/index";

// components
import Head from "../components/Head";
import { LayoutProfile } from "../components/layout/index";
import { TweetList } from "../components/TweetList";
import { UserProfile } from "../components/UserProfile";
import { LoadingIcon } from "../components/LoadingIcon";

import { color } from "../utils/constants/index";
import { padding } from "../utils/index";

import { User as UserType } from "../types";
import { useCurentUsers } from "../hooks/index";

type Props = {
  handleSetLogin?: Function;
};

type PropsHeader = {
  user: UserType;
};

const UserHeader: React.FC<PropsHeader> = ({ user }) => {
  return (
    <>
      {user.id === 0 ? (
        <LoadingIcon />
      ) : (
        <div css={headerContainer}>
          <div css={cover}></div>
          <div css={inner}>
            <UserProfile user={user} />
          </div>
        </div>
      )}
    </>
  );
};

const headerContainer = css({
  borderBottom: `solid 1px ${color.gray.dark}`,
});

const inner = css({
  margin: "0 auto",
  maxWidth: "680px",
});

const User: React.FC<Props> = () => {
  const { id } = useParams<{ id?: string }>();
  const { currentUser } = useCurentUsers();
  const { tweets } = useTweets();

  const isFetched = currentUser?.id !== 0;

  return (
    <>
      <Head title={isFetched ? `${currentUser.nickname}（@${id}）` : ""} />
      <LayoutProfile heading={<UserHeader user={currentUser} />}>
        <Switch>
          <Route exact path="/user/:id">
            {!!tweets.length ? (
              <TweetList tweets={tweets} />
            ) : (
              <p css={[noTweets, padding.all[6]]}>ツイートなし</p>
            )}
          </Route>
          <Route exact path="/user/:id/follow" component={FollowUsers} />
        </Switch>
      </LayoutProfile>
    </>
  );
};

const cover = css({
  height: "130px",
  backgroundColor: color.main.blue,
});

const noTweets = css({
  fontSize: 18,
  fontWeight: "bold",
  textAlign: "center",
});

export { User };
