export type Auth = {
  uid: string;
  client: string;
  token: string;
};

export type User = {
  id: number;
  name: string;
  nickname: string;
  email?: string;
  profile?: string;
};

type SetTokenAction = {
  type: "SET_TOKEN";
  auth: Auth;
};

type SetUserAction = {
  type: "SET_USER";
  user: User;
};

type ResetState = {
  type: "RESET_STATE";
};

export type Actions = SetTokenAction | SetUserAction | ResetState;

export type State = {
  auth: Auth;
  user: User;
};

export type StoreProvider = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};
