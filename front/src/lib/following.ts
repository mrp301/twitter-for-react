import { $axios } from "./index";

const following = async (userId: number, followUserId: number): Promise<void> => {
  const params = {
    user_id: userId,
    follow_user_id: followUserId,
  };

  try {
    await $axios.post("relationships", params);
  } catch (error) {
    throw new Error(error);
  }
};

export { following };
