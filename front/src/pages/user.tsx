import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Home = () => {
  let { id } = useParams<{id?: string}>();

  return (
    <>
    {id}
    </>
  );
}

export default Home;
