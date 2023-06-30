import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

interface State {
  [key: string]: any;
}
const initialState = {};

export default function (state:State = initialState, action:any) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
