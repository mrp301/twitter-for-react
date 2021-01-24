/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { css } from '@emotion/react'
import { $axios } from '../lib/axios';
import { useHistory } from "react-router-dom";
import camelCaseKeys from 'camelcase-keys';

import Index from './index';

import AppInput from '../components/form/AppInput';
import AppButton from '../components/AppButton';
import colorCodes from '../utils/colorCodes';

type Props = {
  children: React.ReactElement,
}

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

const h1 = css({
  padding: 15,
  textAlign: 'center',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  backgroundColor: colorCodes.primary,
})

const title = css({
  textAlign: 'center',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: 10,
});

const mgBottom = css({
  marginBottom: 15,
});

const userInfo = css({
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


const Login: React.FC<Props> = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    document.title = 'ログイン';
  });

  const [login, setLogin] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [user, setUser] = useState<ResponseLoginBody>();


  const handleLogin = async(): Promise<void> => {
    const postParams: PostParams = { email, password}
    try {
      const response = await $axios.post('/sign_in', postParams);
      const responseBody: ResponseLoginBody = response.data.data;
      const responseHeader: ResponseLoginHeaders = response.headers;
      const { uid, client, accessToken: token } = responseHeader;

      setUser(responseBody);

      console.log(`${uid}：${client}：${token}`);
      console.log(responseBody);
      console.log(responseHeader);

      setLogin(true);
      history.push('/home');

    } catch(error) {
      const { errors }: {errors: string[]} = camelCaseKeys(error.response.data);
      setErrors(errors);
      setLogin(false);
    }
  }

  if (login && user) {
    return (
      <>
        <div css={container}>
          <h1 css={h1}>ログイン中</h1>
          <ul css={userInfo}>
            <li>ID：{user.id}</li>
            <li>名前{user.name}</li>
            <li>ニックネーム：{user.nickname}</li>
            <li>メール{user.email}</li>
          </ul>
          {children}
        </div>
      </>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/login">
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
                <div className="u-margin-bottom--large">
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
                <Link to="/">アカウント作成</Link>
              </div>
            </>
          </Route>
          <Route path="/" component={Index} />
        </Switch>

      </Router>
    );
  }
}

export default Login;
