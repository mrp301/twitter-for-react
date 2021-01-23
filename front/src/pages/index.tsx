/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react'
import axios from 'axios';
import colorCodes from '../utils/colorCodes';

import AppInput from '../components/form/AppInput';

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

const input = css({
  padding: '10px 5px',
  width: '100%',
  borderRadius: 4,
  border: 'solid 1px #fff',
  backgroundColor: colorCodes.tertiary,
});

const button = css({
  width: '100%',
  minWidth: 300,
  fontSize: '1.3rem',
  color: '#fff',
  padding: '15px 20px',
  fontWeight: 'bold',
  textAlign: 'center',
  borderRadius: 48,
  backgroundColor: colorCodes.primary,
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  }
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

  const handleClick = async() => {
    console.log(`${name}:${nickname}:${email}:${password}:${password_confirmation}`);
    if (!name || !nickname || !email || !password || !password_confirmation) {
      alert('未入力項目があります。');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth', {
        name,
        nickname,
        email,
        password,
        password_confirmation,
      });
      console.log(response);
    } catch({ response }) {
      console.error(response.data.errors);
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
          <button css={button} onClick={handleClick}>アカウント作成</button>
        </div>
      </div>
    </>
  );
}

export default Index;
