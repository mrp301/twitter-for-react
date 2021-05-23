/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import Head from "../components/Head";
import AppButton from "../components/AppButton";
import OnlyCard from "../components/layout/OnlyCard";
import { textAlign, marginBottom } from "../lib/style/index";

const h1 = css({
  textAlign: "center",
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: "20px",
});

const Index: React.FC = () => {
  return (
    <>
      <Head title="「いま」を見つけよう" />
      <OnlyCard>
        <h1 css={h1}>
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Pristagram" width="200" />
        </h1>
        <div css={[marginBottom("medium"), textAlign("center")]}>
          <Link to="/signup">
            <AppButton type="primary" css={marginBottom("medium")}>
              アカウント作成
            </AppButton>
          </Link>
          <Link to="/login">
            <AppButton type="primary" css={marginBottom("xxlarge")}>
              ログイン
            </AppButton>
          </Link>
          <Link to="/home">
            <AppButton type="nomal">ログインせずタイムラインを見る</AppButton>
          </Link>
        </div>
      </OnlyCard>
    </>
  );
};

export default Index;
