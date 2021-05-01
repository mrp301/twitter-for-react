/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { $axios } from "../lib/axios";
import { useHistory } from "react-router-dom";
import camelCaseKeys from "camelcase-keys";

import AppInput from "../components/form/AppInput";
import AppButton from "../components/AppButton";
import Head from "../components/Head";
import colorCodes from "../utils/colorCodes";

type Props = {
  handleSetLogin?: Function;
};

const container = css({
  margin: "0 auto",
  maxWidth: 540,
  padding: "30px 20px",
  borderRadius: 10,
});

const title = css({
  textAlign: "center",
  fontSize: "1.8rem",
  fontWeight: "bold",
  marginBottom: 10,
});

const errorList = css({
  marginTop: 30,
  padding: 10,
  border: `solid 2px ${colorCodes.primary}`,
  backgroundColor: colorCodes.tertiary,
  listStyle: "square",
  listStylePosition: "inside",
  "li:not(:last-child)": {
    marginBottom: 10,
  },
});

const mgBottom = css({
  marginBottom: 15,
});

const Signup: React.FC<Props> = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const createUser = async (): Promise<void> => {
    try {
      await $axios.post("/", {
        name,
        nickname,
        email,
        password,
        password_confirmation,
      });
      history.push("/login");
    } catch (error) {
      const { fullMessages }: { fullMessages: string[] } = camelCaseKeys(
        error.response.data.errors
      );
      setErrors(fullMessages);
      console.error(fullMessages);
    }
  };

  const handleClick = (): void => {
    console.log(`${name}:${nickname}:${email}:${password}:${password_confirmation}`);
    if (!name || !nickname || !email || !password || !password_confirmation) {
      alert("未入力項目があります。");
      return;
    }
    createUser();
  };

  return (
    <>
      <Head title="アカウント作成" />
      <div css={container}>
        <div css={title}>アカウントを作成</div>
        <ul className="u-margin-bottom--large">
          <li>
            <AppInput
              label="ユーザー名"
              key="name"
              name="name"
              value={name}
              setValue={setName}
              placeholder="ユーザー名"
              cssProps={mgBottom}
            />
          </li>
          <li>
            <AppInput
              label="ニックネーム"
              key="nickname"
              name="nickname"
              value={nickname}
              setValue={setNickname}
              placeholder="ニックネーム"
              cssProps={mgBottom}
            />
          </li>
          <li>
            <AppInput
              label="email"
              key="email"
              name="email"
              value={email}
              setValue={setEmail}
              placeholder="email"
              cssProps={mgBottom}
            />
          </li>
          <li>
            <AppInput
              label="password"
              key="password"
              name="password"
              value={password}
              setValue={setPassword}
              placeholder="password"
              cssProps={mgBottom}
            />
          </li>
          <li>
            <AppInput
              label="パスワード確認"
              key="password_confirmation"
              name="password_confirmation"
              value={password_confirmation}
              setValue={setPassword_confirmation}
              placeholder="パスワード確認"
            />
          </li>
        </ul>
        <div className="u-margin-bottom--large">
          <AppButton type="nomal" handleClick={handleClick}>
            アカウント作成
          </AppButton>
        </div>
        {!!errors.length && (
          <ul css={errorList}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <Link to="/login">ログイン</Link>
      </div>
    </>
  );
};

export default Signup;
