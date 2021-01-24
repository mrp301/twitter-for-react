import React, { useEffect } from 'react'

const Home = () => {
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
