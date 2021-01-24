// /src/api/user.ts

import { AxiosPromise } from 'axios';

import client from '../lib/client';

interface PostParams {
  name: string,
  nickname: string,
  email: string,
  password: string,
  password_confirmation: string,
}

export const createUser = (): AxiosPromise<[]> => client.get(`/auth`);