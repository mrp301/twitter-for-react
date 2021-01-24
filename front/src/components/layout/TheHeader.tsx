/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

import colorCodes from '../../utils/colorCodes';

const header = css`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 40px;
  background-color: ${colorCodes.primary};
  *:not(:last-child) {
    margin-right: 20px;
  }
`

const theHeader: React.FC = ({ children }) => {
  return (
    <header css={header}>
      <h1>プリスタグラム</h1>
      {children}
    </header>
  )
};

export default theHeader;
