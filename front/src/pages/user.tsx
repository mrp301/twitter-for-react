import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {
  handleSetLogin?: Function,
}

const User: React.FC<Props> = () => {
  let { id } = useParams<{id?: string}>();

  return (
    <>
      {id}
    </>
  );
}

export default User;
