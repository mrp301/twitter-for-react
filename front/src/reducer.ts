// https://qiita.com/okumurakengo/items/aecd060ce64c99a646c8
import { State, Actions } from "./types";
import { getSession } from "./lib/session";

type Auth = {
  uid: string;
  client: string;
  token: string;
};

type User = {
  id: number;
  email: string;
  provider: string;
  uid: string;
  allowPasswordChange: boolean;
  name: string;
  nickname: string;
  image?: string;
};

const auth = getSession("auth") as Auth | null;
const user = getSession("user") as User | null;

export const initialState: State =
  !!auth && !!user
    ? { auth, user }
    : {
        auth: {
          uid: "",
          client: "",
          token: "",
        },
        user: {
          id: 0,
          email: "",
          name: "",
          nickname: "",
        },
      };

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, auth: { ...action.auth } };
    case "SET_USER":
      return { ...state, user: { ...action.user } };
    default:
      return state;
  }
};
