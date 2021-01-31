// https://qiita.com/okumurakengo/items/aecd060ce64c99a646c8
import { State, Actions } from './types';

export const initialState: State = {
  auth: {
    uid: '',
    client: '',
    token: '',
  },
  user: {
    id: 1,
    name: '',
    nickname: '',
    email: '',
  },
}

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, auth: { ...action.auth }};
      case 'SET_USER':
        return { ...state, user: { ...action.user }};
    default:
      return state;
  }
}
