/** @jsxImportSource @emotion/react */
import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { useHistory } from "react-router-dom";
import camelCaseKeys from "camelcase-keys";

// components
import AppInput from "../components/form/AppInput";
import { Button } from "../components/Button";
import OnlyCard from "../components/layout/OnlyCard";
import Head from "../components/Head";

// utils
import { $axios } from "../lib/axios";
import { color } from "../utils/constants/index";
import { textAlign, marginBottom } from "../lib/style/index";
import { reducer, initialState } from "../modules/index";

type Props = {
  handleSetLogin?: Function;
};
type FormsKey = keyof typeof initialState;
type OnChange = (key: FormsKey) => (e: React.ChangeEvent<HTMLInputElement>) => void;

type Forms = {
  name: FormsKey;
  placeholder: string;
  inputType: "text" | "password" | "email";
}[];

const forms: Forms = [
  {
    name: "name",
    placeholder: "ユーザーID",
    inputType: "text",
  },
  {
    name: "nickname",
    placeholder: "ユーザー名",
    inputType: "text",
  },
  {
    name: "email",
    placeholder: "momoyama.mirai@example.com",
    inputType: "email",
  },
  {
    name: "password",
    placeholder: "パスワード",
    inputType: "password",
  },
  {
    name: "password_confirmation",
    placeholder: "パスワード確認",
    inputType: "password",
  },
];

const Signup: React.FC<Props> = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState<string[]>([]);

  const onChange: OnChange = (key) => {
    return (e): void => {
      const value = e.target.value;
      dispatch({
        type: "SET_STATE",
        key,
        value,
      });
    };
  };

  const createUser = async (): Promise<void> => {
    try {
      await $axios.post("api/v1/auth/", { ...state });
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
    const keys = Object.keys(state) as FormsKey[];
    const inValid = keys.every((key) => !state[key]);
    if (inValid) {
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
          {forms.map(({ name, placeholder, inputType }) => (
            <li key={name}>
              <AppInput
                key={name}
                name={name}
                value={state[name]}
                onChange={onChange(name)}
                placeholder={placeholder}
                type={inputType}
                css={marginBottom("small")}
              />
            </li>
          ))}
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
