import React, { useState } from 'react';

const Index = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  const handleClick = () => {
    console.log(`${name}:${nickname}:${email}:${password}:${password_confirmation}`);
  }

  return (
    <>
      <h1>ぷりったー2</h1>
      <h2>アカウント作成</h2>
      <ul>
        <li>
          <p>名前</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
          <p>ニックネーム</p>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </li>
        <li>
          <p>email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      　</li>
        <li>
          <p>パスワード</p>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </li>
        <li>
          <p>パスワード確認</p>
          <input
            type="text"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
        </li>
      </ul>
      <div>
        <button onClick={handleClick}>アカウント作成</button>
      </div>

      <h2>ログイン</h2>
    </>
  );
}

export default Index;
