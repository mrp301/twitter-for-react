/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import TextareaAutosize from "react-textarea-autosize";

// utils
import { color } from "../../utils/constants/index";
import { padding, margin } from "../../utils/index";

// hooks
import { useInputFocus } from "../../hooks/index";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type Props = {
  placeholder: string;
  minRows?: number;
};

const TextArea: React.FC<Props & TextareaProps> = ({
  value,
  minRows = 3,
  placeholder,
  onChange,
}) => {
  const { inputContainer, setFocus } = useInputFocus();

  return (
    <div css={[inputContainer, padding.top[1], padding.x[2]]}>
      <label css={[label]}>{placeholder}</label>
      <TextareaAutosize
        minRows={minRows}
        value={value}
        css={[textArea, margin.top[5]]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={onChange}
      />
    </div>
  );
};

const label = css({
  position: "absolute",
  top: "8px",
  left: "9px",
  fontSize: 10,
  color: color.gray.dark,
});

const textArea = css({
  width: "100%",
  color: color.main.black,
});

export { TextArea };
