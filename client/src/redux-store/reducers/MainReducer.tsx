import produce, { Draft } from "immer";
import {
  MainDispatchTypes,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
} from "../actions/types";

interface DefaultStateI {
  firstName: string;
  lastName: string;
}

const defaultState: DefaultStateI = {
  firstName: "Bob",
  lastName: "Jones",
};

const MainReducer = (
  state: DefaultStateI = defaultState,
  action: MainDispatchTypes
): DefaultStateI => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_FIRST_NAME: {
      return produce(state, (draft: Draft<DefaultStateI>) => {
        draft.firstName = payload;
      });
    }

    case UPDATE_LAST_NAME: {
      return produce(state, (draft: Draft<DefaultStateI>) => {
        draft.lastName = payload;
      });
    }
    default: {
      return state;
    }
  }
};

export default MainReducer;
