/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import Head from "../components/Head";
import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import marginSizes from "../lib/style/marginSizes";

const container = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 70,
  height: "100%",
});

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
      <div css={container}>
        <AppCard>
          <h1 css={h1}>Pristagram</h1>
          <div css={marginSizes.bottom[16]}>
            <Link to="/signup">
              <AppButton type="nomal">アカウント作成</AppButton>
            </Link>
          </div>
          <Link to="/login">
            <AppButton type="primary">ログイン</AppButton>
          </Link>
        </AppCard>
      </div>
    </>
  );
};

export default Index;
