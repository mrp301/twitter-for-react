/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { $axios } from "../lib/axios";
import { useHistory } from "react-router-dom";
import camelCaseKeys from "camelcase-keys";

import AppInput from "../components/form/AppInput";
import { Button } from "../components/Button";
import OnlyCard from "../components/layout/OnlyCard";
import Head from "../components/Head";
import { color } from "../utils/constants/index";
import { textAlign, marginBottom } from "../lib/style/index";

type Props = {
  handleSetLogin?: Function;
};

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
      await $axios.post("api/v1/auth/", {
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
      <OnlyCard>
        <div css={title}>アカウントを作成</div>
        <ul css={marginBottom("large")}>
          <li>
            <AppInput
              key="name"
              name="name"
              value={name}
              setValue={setName}
              placeholder="ユーザー名"
              css={marginBottom("small")}
              type="text"
            />
          </li>
          <li>
            <AppInput
              key="nickname"
              name="nickname"
              value={nickname}
              setValue={setNickname}
              placeholder="ニックネーム"
              css={marginBottom("small")}
              type="text"
            />
          </li>
          <li>
            <AppInput
              key="email"
              name="email"
              value={email}
              setValue={setEmail}
              placeholder="email"
              css={marginBottom("small")}
              type="email"
            />
          </li>
          <li>
            <AppInput
              key="password"
              name="password"
              value={password}
              setValue={setPassword}
              placeholder="password"
              css={marginBottom("small")}
              type="password"
            />
          </li>
          <li>
            <AppInput
              key="password_confirmation"
              name="password_confirmation"
              value={password_confirmation}
              setValue={setPassword_confirmation}
              placeholder="パスワード確認"
              type="password"
            />
          </li>
        </ul>
        <div css={[textAlign("center"), marginBottom("small")]}>
          <Button type="primary" handleClick={handleClick} css={marginBottom("medium")}>
            アカウント作成
          </Button>
          <Link to="/login">
            <Button type="nomal">ログイン</Button>
          </Link>
        </div>
        {!!errors.length && (
          <ul css={errorList}>
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

const errorList = css({
  marginTop: 30,
  padding: 10,
  border: `solid 2px ${color.primary}`,
  backgroundColor: color.tertiary,
  listStyle: "square",
  listStylePosition: "inside",
  "li:not(:last-child)": {
    marginBottom: 10,
  },
});

export { Signup };
