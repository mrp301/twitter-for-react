/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { transform } from "framer-motion";
import { color } from "../../utils/constants/index";
import { padding, margin } from "../../utils/index";

type Props = {
  key: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  cssProps?: SerializedStyles;
  className?: string;
  type: string;
};

const AppInput: React.FC<Props> = (props) => {
  const input = css(
    {
      width: "100%",
      color: color.main.black,
    },
    props.cssProps
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    props.setValue(target.value);
  };

  return (
    <>
      <div
        css={[inputContainer, padding.y[1], padding.right[2], padding.left[2]]}
        className={props.className}
      >
        <label css={[label]}>{props.placeholder}</label>
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value}
          css={[input, margin.top[5], margin.bottom[1]]}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};

const inputContainer = css({
  position: "relative",
  width: "100%",
  borderRadius: 4,
  border: `solid 1px ${color.gray.dark}`,
});

const label = css({
  position: "absolute",
  top: "8px",
  left: "9px",
  fontSize: 10,
  color: color.gray.dark,
});

export default AppInput;
