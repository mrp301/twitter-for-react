import React, { useEffect } from 'react'

type Props = {
  handleSetLogin?: Function,
}

const Home: React.FC<Props> = () => {
  useEffect(() => {
    document.title = 'HOME';
  });

  return (
    <>
    タイムライン
    </>
  );
}

export default Home;
