/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { useAllUsers } from "../../hooks/index";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import Head from "../../components/Head";
import { LoadingIcon } from "../../components/LoadingIcon";
import { UserCard } from "../../components/UserCard";
import { Button } from "../../components/Button";
import { AuthContext } from "../../components/AuthCotainer";
import { SlideIn } from "../../components/motion/index";

import { color } from "../../utils/constants/index";
import { padding, margin, hover } from "../../utils/index";
import { following } from "../../lib/index";
import { useFolloingUsers } from "../../hooks/index";

import { User } from "../../types";

const FollowBtn: React.FC<{ followUsers: User[]; followId: number }> = ({
  followUsers,
  followId,
}) => {
  const { state } = useContext(AuthContext);
  const isFollowd = () => followUsers.some((user) => user.id === followId);

  const handleClick = (followUserId: number) => {
    const userId = state.user.id;
    following(userId, followUserId);
  };

  return (
    <>
      {isFollowd() ? (
        <Button
          color="secondary"
          size="nomal"
          handleClick={() => {
            return;
          }}
        >
          フォロー中
        </Button>
      ) : (
        <Button color="primary" size="nomal" handleClick={() => handleClick(followId)}>
          フォローする
        </Button>
      )}
    </>
  );
};

const FollowUsers: React.FC = () => {
  const { users } = useAllUsers();
  const { state } = useContext(AuthContext);
  const isFetched = !!users.length;

  const { followUsers } = useFolloingUsers();
  const isFollowd = (followId: number) =>
    followUsers.some((user) => user.id === followId);

  return (
    <>
      <Head title="ユーザー一覧" />
      {isFetched ? (
        <SlideIn>
          <ul css={style}>
            {users.map(({ id, nickname, name, profile }) => {
              return (
                isFollowd(id) && (
                  <li key={name} css={[padding.y[3], padding.x[4], hover()]}>
                    <Link to={`/user/${name}`}>
                      <div css={header}>
                        <UserCard
                          nickname={nickname}
                          name={name}
                          css={[margin.bottom[2], text]}
                        />
                        {state.user.name !== name && (
                          <FollowBtn followUsers={followUsers} followId={id} />
                        )}
                      </div>
                      <p css={[profileStyle, margin.bottom[2]]}>{profile}</p>
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </SlideIn>
      ) : (
        <LoadingIcon />
      )}
    </>
  );
};

const style = css({
  li: {
    borderBottom: `solid 1px ${color.main.white}`,
  },
  a: {
    color: color.main.black,
  },
});

const header = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const text = css({
  fontSize: "15px",
});

const profileStyle = css({
  fontSize: "14px",
  whiteSpace: "pre-wrap",
});

export { FollowUsers };
