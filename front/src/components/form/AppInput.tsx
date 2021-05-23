/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import colorCodes from "../../utils/colorCodes";

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

const appInput: React.FC<Props> = (props) => {
  const input = css(
    {
      padding: 10,
      width: "100%",
      borderRadius: 4,
      border: "solid 1px #fff",
      backgroundColor: colorCodes.tertiary,
    },
    props.cssProps
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    props.setValue(target.value);
  };

  return (
    <>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        css={input}
        className={props.className}
        placeholder={props.placeholder}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default appInput;
