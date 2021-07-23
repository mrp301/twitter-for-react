const initialState = {
  name: "",
  nickname: "",
  email: "",
  password: "",
  password_confirmation: "",
};

type State = typeof initialState;

type Action = {
  type: "SET_STATE";
  key: keyof State;
  value: string | number;
};

type Reducer = (state: State, action: Action) => State;

const reducer: Reducer = (state, action) => {
  const { type, key, value } = action;
  switch (type) {
    case "SET_STATE":
      return {
        ...state,
        [key]: value,
      };
    default:
      return { ...state };
  }
};

export { reducer, initialState };
