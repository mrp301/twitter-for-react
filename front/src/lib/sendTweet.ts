import { $axios } from "./index";
import { Tweet } from "../components/TweetItem";

const sendTweet = async (
  userId: number,
  name: string,
  content: string
): Promise<Tweet[]> => {
  const params = {
    user_id: userId,
    name,
    content: content,
  };

  try {
    const res = await $axios.post("tweets", params);
    return res.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { sendTweet };
