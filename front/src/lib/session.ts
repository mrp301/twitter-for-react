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

const setSession = (key: string, value: {}): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getSession = (key: "auth" | "user"): Auth | User | null => {
  if (key === "auth") {
    return JSON.parse(sessionStorage.getItem(key) as "auth");
  }
  return JSON.parse(sessionStorage.getItem(key) as "user");
};

export { setSession, getSession };
