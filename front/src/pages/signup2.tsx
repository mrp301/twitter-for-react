/** @jsxImportSource @emotion/react */
import React, { useReducer } from "react";
import { reducer, initialState } from "../modules/index";

type FormsKey = keyof typeof initialState;
type Forms = {
  name: FormsKey;
  placeholder: string;
  inputType: "text" | "password" | "email";
}[];

const forms: Forms = [
  {
    name: "name",
    placeholder: "ユーザーID",
    inputType: "text",
  },
  {
    name: "nickname",
    placeholder: "ユーザー名",
    inputType: "text",
  },
  {
    name: "email",
    placeholder: "momoyama.mirai@example.com",
    inputType: "email",
  },
  {
    name: "password",
    placeholder: "パスワード",
    inputType: "password",
  },
  {
    name: "password_confirmation",
    placeholder: "パスワード確認",
    inputType: "password",
  },
];

type OnChange = (key: FormsKey) => (e: React.ChangeEvent<HTMLInputElement>) => void;
type HandleClick = (e: React.FormEvent<HTMLFormElement>) => void;

const Signup2: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange: OnChange = (key) => {
    return (e): void => {
      const value = e.target.value;
      dispatch({
        type: "SET_STATE",
        key,
        value,
      });
    };
  };

  const handleClick: HandleClick = (e) => {
    e.preventDefault();
    console.log({ ...state });
  };

  // return (
  //   <form onSubmit={handleClick}>
  //     <ul>
  //       {forms.map(({ name, placeholder, inputType }) => (
  //         <li key={name}>
  //           <input
  //             key={name}
  //             name={name}
  //             value={state[name]}
  //             onChange={(e) =>
  //               dispatch({
  //                 type: "SET_STATE",
  //                 key: name,
  //                 value: e.target.value,
  //               })
  //             }
  //             placeholder={placeholder}
  //             type={inputType}
  //           />
  //         </li>
  //       ))}
  //     </ul>
  //     <div>
  //       <button type="submit">アカウント作成</button>
  //     </div>
  //   </form>
  // );

  return (
    <form onSubmit={handleClick}>
      <ul>
        {forms.map(({ name, placeholder, inputType }) => (
          <li key={name}>
            <input
              key={name}
              name={name}
              value={state[name]}
              onChange={onChange(name)}
              placeholder={placeholder}
              type={inputType}
            />
          </li>
        ))}
      </ul>
      <div>
        <button type="submit">アカウント作成</button>
      </div>
    </form>
  );
};

export { Signup2 };
