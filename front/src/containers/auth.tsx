/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

type Props = {
  children: React.ReactElement,
}

const Auth: React.FC<Props> = ({ children }) => {
  const [login, setLogin] = useState<boolean>(false);

  const handleSetLogin = (state: boolean): void => {
    console.log('きてる？');
    setLogin(state);
  }

  const cloneChildren = React.cloneElement(children, {handleSetLogin});

  if (login) {
    return (
      <>
        {cloneChildren}
        <p>ログインした</p>
      </>
    )
  } else {
    return (
      <>
        {cloneChildren}
        <p>ログインしてない</p>
      </>
    )
  }
};

export default Auth;
