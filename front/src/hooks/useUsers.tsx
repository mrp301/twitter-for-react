import { useState, useEffect } from "react";
import { $axios } from "../lib/axios";
import { useLocation, useParams } from "react-router-dom";
import { User } from "../types";

const useAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const location = useLocation();

  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res = await $axios.get("users");
        setUsers(res.data.data);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [location]);

  return { users };
};

const useCurentUsers = () => {
  const initialUser = {
    id: 0,
    name: "",
    nickname: "",
    profile: "",
  };

  const [currentUser, setCurrentUser] = useState<User>(initialUser);
  const { id }: { id: string } = useParams();

  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res = await $axios.get(`users/${id}/current_user`);
        setCurrentUser(res.data.data[0]);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [id]);

  return { currentUser };
};

const useFolloingUsers = () => {
  const [followUsers, setFollowUsers] = useState<User[]>([]);
  const { id }: { id: string } = useParams();
  console.log(id);

  useEffect(() => {
    let unmounted = false;
    (async () => {
      if (!unmounted) {
        const res = await $axios.get(`users/${id}/following_users`);
        const formatDatas: User[] = res.data.data;
        if (formatDatas === undefined) {
          throw new Error("フォロー一覧が取得できませんでした。");
        }

        setFollowUsers(formatDatas);
      }
    })();

    return () => {
      unmounted = true;
    };
  }, [id]);

  return { followUsers };
};

export { useAllUsers, useCurentUsers, useFolloingUsers };
