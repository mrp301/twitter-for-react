/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthCotainer";
import { useHistory } from "react-router-dom";
import * as H from "history";
import { css } from "@emotion/react";
import { padding, margin } from "../../utils/index";

import { Modal } from "../../components/Modal";
import AppInput from "../../components/form/AppInput";
import { Button } from "../../components/Button";

const Profile: React.FC = () => {
  const histroy: H.History = useHistory();
  const handleClose = (): void => {
    histroy.goBack();
  };

  const { state } = useContext(AuthContext);
  const user = state.user;

  const [name, setName] = useState<string>(user.nickname);
  const [profile, setProfile] = useState<string>("");

  return (
    <Modal
      headerText="プロフィールを編集"
      isScroll={true}
      handleClose={handleClose}
      headerButton={<Button type="primary">保存</Button>}
    >
      <div css={padding.all[4]}>
        <AppInput
          key="name"
          name="name"
          value={name}
          setValue={setName}
          placeholder="名前"
          type="text"
          css={margin.bottom[4]}
        />
        <AppInput
          key="profile"
          name="profile"
          value={profile}
          setValue={setProfile}
          placeholder="自己紹介"
          type="text"
          css={margin.bottom[4]}
        />
      </div>
    </Modal>
  );
};

export { Profile };
