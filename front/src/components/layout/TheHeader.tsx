/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

import colorCodes from '../../utils/colorCodes';

const header = css`
  margin-bottom: 40px;
  background-color: ${colorCodes.primary};
`

const theHeader: React.FC = () => {
  return (
    <header css={header}>
      ヘッダ
    </header>
  )
};

export default theHeader;