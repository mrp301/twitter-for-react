/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Head from "../components/Head";

// style
import { css } from "@emotion/react";
import { textAlign, marginBottom } from "../lib/style/index";
import { padding, margin } from "../utils/index";

// modules
import { $axios } from "../lib/axios";
import { User } from "../reducer";

// components
import AppInput from "../components/form/AppInput";
import { Button } from "../components/Button";
import OnlyCard from "../components/layout/OnlyCard";
import { AuthContext } from "../components/AuthCotainer";

// lib
import { setSession } from "../lib/session";

// types
import { Auth, StoreProvider } from "../types";

type PostParams = {
  email: string;
  password: string;
};

type ResponseLoginHeaders = {
  accessToken: string;
  cacheControl: string;
  client: string;
  contentType: string;
  uid: string;
};

const Login: React.FC = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const { dispatch }: StoreProvider = useContext(AuthContext);

  const handleLogin = async (): Promise<void> => {
    const postParams: PostParams = { email, password };
    try {
      const response = await $axios.post("api/v1/auth/sign_in", postParams);
      const responseBody: User = response.data.data;
      const responseHeader: ResponseLoginHeaders = response.headers;
      const { uid, client, accessToken: token } = responseHeader;
      const auth: Auth = { uid, client, token };

      dispatch({ type: "SET_TOKEN", auth });
      dispatch({ type: "SET_USER", user: responseBody });
      setSession("auth", auth);
      setSession("user", responseBody);

      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Head title="ログイン" />
      <OnlyCard>
        <div css={title}>ログイン</div>
        <ul css={marginBottom("large")}>
          <li>
            <AppInput
              key="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              css={margin.bottom[2]}
              type="text"
            />
          </li>
          <li>
            <AppInput
              key="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
              css={margin.bottom[4]}
            />
          </li>
        </ul>
        <div css={textAlign("center")}>
          <Button
            color="primary"
            size="full"
            handleClick={handleLogin}
            css={margin.bottom[2]}
          >
            ログインする
          </Button>
          <Link to="/signup">
            <Button color="secondary" size="full" css={margin.bottom[5]}>
              アカウント作成する
            </Button>
          </Link>
          <Link to="/home">
            <Button color="nomal" size="full">
              ログインせずタイムラインを見る
            </Button>
          </Link>
        </div>
        {!!errors.length && (
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </OnlyCard>
    </>
  );
};

const title = css({
  textAlign: "center",
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: 25,
});

export { Login };
