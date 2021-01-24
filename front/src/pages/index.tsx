/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react'
import { $axios } from '../lib/axios';
import { useHistory } from "react-router-dom";

import AppInput from '../components/form/AppInput';
import AppButton from '../components/AppButton';
import colorCodes from '../utils/colorCodes';

const container = css({
  margin: '0 auto',
  maxWidth: 540,
  padding: '30px 20px',
  borderRadius: 10,
});

const title = css({
  textAlign: 'center',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: 10,
});

const errorList = css({
  marginTop: 30,
  padding: 10,
  border: `solid 2px ${colorCodes.primary}`,
  backgroundColor: colorCodes.tertiary,
  listStyle: 'square',
  listStylePosition: 'inside',
  'li:not(:last-child)': {
    marginBottom: 10,
  },
})

const mgBottom = css({
  marginBottom: 15,
});


const Index = () => {
  const history = useHistory();
  useEffect(() => {
    document.title = '新規アカウント作成';
  });

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const createUser = async(): Promise<void> => {
    try {
      await $axios.post('/', {
        name,
        nickname,
        email,
        password,
        password_confirmation,
      });
      history.push('/home');
    } catch(error) {
      const { fullMessages }: {fullMessages: string[]} = error.response.data.errors;
      setErrors(fullMessages);
      console.error(fullMessages);
    }
  }

  const handleClick = (): void => {
    console.log(`${name}:${nickname}:${email}:${password}:${password_confirmation}`);
    if (!name || !nickname || !email || !password || !password_confirmation) {
      alert('未入力項目があります。');
      return;
    }
    createUser();
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
        {!!errors.length && (
          <ul css={errorList}>
            {errors.map(error =>
              <li key={error}>{error}</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default Index;
