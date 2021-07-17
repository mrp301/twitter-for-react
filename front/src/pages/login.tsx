/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Head from "../components/Head";

// style
import { css } from "@emotion/react";
import { textAlign, marginBottom } from "../lib/style/index";

// modules
import { $axios } from "../lib/axios";

// components
import AppInput from "../components/form/AppInput";
import AppButton from "../components/AppButton";
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

type ResponseLoginBody = {
  id: number;
  email: string;
  provider: string;
  uid: string;
  allowPasswordChange: boolean;
  name: string;
  nickname: string;
  image?: string;
};

const title = css({
  textAlign: "center",
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: 25,
});

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
      const responseBody: ResponseLoginBody = response.data.data;
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
              setValue={setEmail}
              placeholder="email"
              css={marginBottom("small")}
              type="text"
            />
          </li>
          <li>
            <AppInput
              key="password"
              name="password"
              value={password}
              setValue={setPassword}
              placeholder="password"
              type="password"
            />
          </li>
        </ul>
        <div css={[marginBottom("medium"), textAlign("center")]}>
          <AppButton
            type="primary"
            handleClick={handleLogin}
            css={marginBottom("medium")}
          >
            ログイン
          </AppButton>
          <Link to="/signup">
            <AppButton type="nomal">アカウント作成</AppButton>
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

export { Login };
