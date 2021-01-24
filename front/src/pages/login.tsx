/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react'
import { $axios } from '../lib/axios';
import camelCaseKeys from 'camelcase-keys';
import { useHistory } from "react-router-dom";

import AppInput from '../components/form/AppInput';
import AppButton from '../components/AppButton';

type PostParams = {
  email: string,
  password: string,
}

type ResponseLoginHeaders = {
  accessToken: string,
  cacheControl: string,
  client: string,
  contentType: string,
  uid: string,
}

type ResponseLoginBody = {
  id: number,
  email: string,
  provider: string,
  uid: string,
  allowPasswordChange: boolean,
  name: string,
  nickname: string,
  image?: string,
};

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

const mgBottom = css({
  marginBottom: 15,
});


const Index = () => {
  const history = useHistory();
  useEffect(() => {
    document.title = 'ログイン';
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleLogin = async(): Promise<void> => {
    const postParams: PostParams = {
      email,
      password,
    }

    try {
      const response = await $axios.post('/sign_in', postParams);
      const responseBody: ResponseLoginBody = camelCaseKeys(response.data.data);
      const responseHeader: ResponseLoginHeaders = camelCaseKeys(response.headers);
      const { uid, client, accessToken: token } = responseHeader;

      console.log(`${uid}：${client}：${token}`);
      console.log(responseBody);
      console.log(responseHeader);

      history.push('/home');
    } catch(error) {
      const { errors }: {errors: string[]} = error.response.data;
      setErrors(errors);
    }
  }

  return (
    <>
      <div css={container}>
        <div css={title}>ログイン</div>
        <ul className="u-margin-bottom--large">
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
        </ul>
        <div>
          <AppButton handleClick={handleLogin}>
            ログイン
          </AppButton>
        </div>
        {!!errors.length && (
          <ul>
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
