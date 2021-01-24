/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css, SerializedStyles } from '@emotion/react'
import colorCodes from '../utils/colorCodes';

type Props = {
  handleClick: Function,
  children: React.ReactNode,
  cssProps?: SerializedStyles,
}

const button = css({
  width: '100%',
  minWidth: 300,
  fontSize: '1.3rem',
  color: '#fff',
  padding: '15px 20px',
  fontWeight: 'bold',
  textAlign: 'center',
  borderRadius: 48,
  backgroundColor: colorCodes.primary,
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  }
});

const appButton: React.FC<Props> = ({children, handleClick}) => {
  return(
    <button css={button} onClick={() => handleClick()}>
      {children}
    </button>
  )
};

export default appButton;
