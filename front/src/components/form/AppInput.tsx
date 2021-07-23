/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

// utils
import { color } from "../../utils/constants/index";
import { padding, margin } from "../../utils/index";

// hooks
import { useInputFocus } from "../../hooks/index";

type InutProps = React.InputHTMLAttributes<HTMLInputElement>;
type Props = {
  className?: string;
};

const AppInput: React.FC<Props & InutProps> = (props) => {
  const { inputContainer, setFocus } = useInputFocus();
  const { name, type, value, className, onChange } = props;

  return (
    <>
      <div css={[inputContainer, padding.top[1], padding.x[2]]} className={className}>
        <label css={[label]}>{props.placeholder}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          css={[input, margin.top[5]]}
          className={className}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </>
  );
};

const label = css({
  position: "absolute",
  top: "8px",
  left: "9px",
  fontSize: 10,
  color: color.gray.dark,
});

const input = css({
  width: "100%",
  color: color.main.black,
});

export default AppInput;
