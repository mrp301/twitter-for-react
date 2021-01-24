/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react'
import axios, { AxiosError } from 'axios';
import camelCaseKeys from 'camelcase-keys';
import client from '../lib/client'; 
import colorCodes from '../utils/colorCodes';

import AppInput from '../components/form/AppInput';
import AppButton from '../components/AppButton';

interface PostParams {
  name: string,
  nickname: string,
  email: string,
  password: string,
  password_confirmation: string,
}

const container = css({
  margin: '0 auto',
  width: 540,
  padding: '30px 20px',
  borderRadius: 10,
});

const title = css({
  textAlign: 'center',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: 10,
});

const mgBottom = css({
  marginBottom: 15,
});


const Index = () => {

  useEffect(() => {
    document.title = '新規アカウント作成';
  });

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const handleClick = async(): Promise<void> => {
    console.log(`${name}:${nickname}:${email}:${password}:${password_confirmation}`);
    if (!name || !nickname || !email || !password || !password_confirmation) {
      alert('未入力項目があります。');
      return;
    }
    const postParams: PostParams = {
      name,
      nickname,
      email,
      password,
      password_confirmation,
    }
    try {
      const response = camelCaseKeys(await axios.post('auth', postParams));
      console.log(response.data);
    } catch( response ) {
      console.log(response.errors);
      console.error(camelCaseKeys(response.errors));
    }
  }

  return (
    <>
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
        <div>
          <AppButton handleClick={handleClick}>
            アカウント作成
          </AppButton>
        </div>
      </div>
    </>
  );
}

export default Index;
