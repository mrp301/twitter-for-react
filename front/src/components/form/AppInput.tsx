/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css, SerializedStyles } from '@emotion/react'
import colorCodes from '../../utils/colorCodes';

type Props = {
  label: string,
  key: string,
  name: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  placeholder: string,
  cssProps?: SerializedStyles,
};

const appInput: React.FC<Props> = (props) => {
  const label = css({
    display: 'block',
    marginBottom: 8,
  });

  const input = css(
    {
      padding: '10px 5px',
      width: '100%',
      borderRadius: 4,
      border: 'solid 1px #fff',
      backgroundColor: colorCodes.tertiary,
    },
    props.cssProps,
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    props.setValue(target.value)
  };

  return (
    <>
      <label css={label}>{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type="text"
        value={props.value}
        css={input}
        placeholder={props.placeholder}
        onChange={e => handleChange(e)}
      />
    </>
  )
}

export default appInput;
