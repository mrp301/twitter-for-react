const initialState = {
  name: "",
  nickname: "",
  email: "",
  password: "",
  password_confirmation: "",
};

type State = typeof initialState;
type SET_STATE = {
  type: "SET_STATE";
  key: keyof State;
  value: string | number;
};
type RESET_STATE = {
  type: "RESET_STATE";
};
type Action = SET_STATE | RESET_STATE;

type Reducer = (state: State, action: Action) => State;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      const { key, value } = action;
      return {
        ...state,
        [key]: value,
      };
    case "RESET_STATE":
      return { ...initialState };
    default:
      return { ...state };
  }
};

export { reducer, initialState };
