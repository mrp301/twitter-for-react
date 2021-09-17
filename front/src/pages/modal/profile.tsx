/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthCotainer";
import { useHistory } from "react-router-dom";
import * as H from "history";
import { css } from "@emotion/react";

// compnents
import { TextArea } from "../../components/form/index";
import { Modal } from "../../components/Modal";
import AppInput from "../../components/form/AppInput";
import { Button } from "../../components/Button";

// lib
import { padding, margin } from "../../utils/index";

const Profile: React.FC = () => {
  const histroy: H.History = useHistory();
  const handleClose = (): void => {
    histroy.goBack();
  };

  const { state } = useContext(AuthContext);
  const user = state.user;

  const [name, setName] = useState<string>(user.nickname);
  const [profile, setProfile] = useState<string>(user.profile ? user.profile : "");

  const handleClick = () => {};

  return (
    <Modal
      headerText="プロフィールを編集"
      isScroll={true}
      handleClose={handleClose}
      headerButton={
        <Button color="primary" size="nomal" handleClick={handleClick}>
          保存
        </Button>
      }
    >
      <div css={padding.all[4]}>
        <AppInput
          key="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前"
          type="text"
          css={margin.bottom[4]}
        />
        <TextArea
          key="profile"
          name="profile"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder={"自己紹介"}
          css={margin.bottom[4]}
        />
      </div>
    </Modal>
  );
};

export { Profile };
