import api from "../../utils/api";
import { Dispatch } from "redux";
import {
  MainDispatchTypes,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
} from "./types";

export const setFirstName = (firstName: string) => async (
  dispatch: Dispatch<MainDispatchTypes>
) => {
  try {
    dispatch({ type: UPDATE_FIRST_NAME, payload: firstName });
  } catch (err) {}
};

export const setLastName = (lastName: string) => async (
  dispatch: Dispatch<MainDispatchTypes>
) => {
  try {
    dispatch({ type: UPDATE_LAST_NAME, payload: lastName });
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
