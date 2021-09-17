import { $axios } from "./index";

const signout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await $axios.delete("api/v1/auth/sign_out");
      sessionStorage.removeItem("auth");
      sessionStorage.removeItem("user");
      resolve("sing out success");
    } catch (error) {
      console.error(error);
      reject();
    }
  });
};

export { signout };
