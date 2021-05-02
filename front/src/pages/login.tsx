/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Head from "../components/Head";

// style
import { css } from "@emotion/react";

// modules
import { $axios } from "../lib/axios";
import camelCaseKeys from "camelcase-keys";

// components
import AppInput from "../components/form/AppInput";
import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import { AuthContext } from "../components/AuthCotainer";

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

const container = css({
  margin: "0 auto",
  maxWidth: 540,
  padding: "70px 20px",
  borderRadius: 10,
});

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
      const response = await $axios.post("/sign_in", postParams);
      const responseBody: ResponseLoginBody = response.data.data;
      const responseHeader: ResponseLoginHeaders = response.headers;
      const { uid, client, accessToken: token } = responseHeader;
      const auth: Auth = { uid, client, token };

      console.log(`${uid}：${client}：${token}`);
      console.log(responseBody);
      console.log(responseHeader);

      dispatch({ type: "SET_TOKEN", auth });
      history.push("/home");
    } catch (error) {
      const { errors }: { errors: string[] } = camelCaseKeys(error.response.data);
      setErrors(errors);
    }
  };
  return (
    <>
      <Head title="ログイン" />
      <div css={container}>
        <AppCard>
          <div css={title}>ログイン</div>
          <ul className="u-margin-bottom--large">
            <li>
              <AppInput
                key="email"
                name="email"
                value={email}
                setValue={setEmail}
                placeholder="email"
                className="u-margin-bottom--small"
              />
            </li>
            <li>
              <AppInput
                key="password"
                name="password"
                value={password}
                setValue={setPassword}
                placeholder="password"
              />
            </li>
          </ul>
          <div className="u-margin-bottom--medium u-text--center">
            <AppButton
              type="primary"
              handleClick={handleLogin}
              className="u-margin-bottom--medium"
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
        </AppCard>
      </div>
    </>
  );
};

export default Login;
