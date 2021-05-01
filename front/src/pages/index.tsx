/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import Head from "../components/Head";
import AppButton from "../components/AppButton";

const Index: React.FC = () => {
  return (
    <>
      <Head title="「いま」を見つけよう" />
      <Link to="/signup">
        <AppButton type="nomal">アカウント作成</AppButton>
      </Link>
      <Link to="/login">
        <AppButton type="primary">ログイン</AppButton>
      </Link>
    </>
  );
};

export default Index;
