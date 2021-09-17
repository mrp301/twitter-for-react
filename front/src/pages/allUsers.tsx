/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { useAllUsers } from "../hooks/index";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { color } from "../utils/constants/index";

import Head from "../components/Head";
import { LoadingIcon } from "../components/LoadingIcon";
import { UserCard } from "../components/UserCard";
import { Layout } from "../components/layout/index";
import { AuthContext } from "../components/AuthCotainer";

import { padding, margin, hover } from "../utils/index";
import { useFolloingUsers } from "../hooks/index";

const AllUsers: React.FC = () => {
  const { users } = useAllUsers();
  const { state } = useContext(AuthContext);
  const isFetched = !!users.length;

  const { followUsers } = useFolloingUsers();

  return (
    <>
      <Head title="ユーザー一覧" />
      <Layout heading="ユーザー一覧">
        {isFetched ? (
          <ul css={style}>
            {users.map(({ nickname, name, profile }) => (
              <li key={name} css={[padding.y[3], padding.x[4], hover()]}>
                <Link to={`/user/${name}`}>
                  <div css={header}>
                    <UserCard
                      nickname={nickname}
                      name={name}
                      css={[margin.bottom[2], text]}
                    />
                  </div>
                  <p css={[profileStyle, margin.bottom[2]]}>{profile}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <LoadingIcon />
        )}
      </Layout>
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

export { AllUsers };
