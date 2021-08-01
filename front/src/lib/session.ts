import { Auth, User } from "../types";

const setSession = (key: string, value: {}): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

type GetSession = (key: "auth" | "user") => Auth | User | null;

const getSession: GetSession = (key) => {
  if (key === "auth") {
    return JSON.parse(sessionStorage.getItem(key) as "auth");
  } else if (key === "user") {
    return JSON.parse(sessionStorage.getItem(key) as "user");
  }
  return null;
};

const getSessionUser = (): Auth => {
  const initialUser = {
    id: 0,
    email: "",
    uid: "",
    name: "",
    nickname: "",
    profile: "",
  };
  const storage = sessionStorage.getItem("user");
  return storage === null ? initialUser : JSON.parse(storage);
};

const getSessionAuth = (): Auth => {
  const initialAuth = {
    uid: "",
    client: "",
    token: "",
  };
  const storage = sessionStorage.getItem("auth");
  return storage === null ? initialAuth : JSON.parse(storage);
};

export { setSession, getSession, getSessionAuth, getSessionUser };

// type User = {
//   id: number;
//   email: string;
//   provider: string;
//   uid: string;
//   allowPasswordChange: boolean;
//   name: string;
//   nickname: string;
//   image?: string;
// };
