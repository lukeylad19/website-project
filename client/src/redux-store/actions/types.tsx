export const UPDATE_FIRST_NAME = "@main/update-first-name";
export const UPDATE_LAST_NAME = "@main/update-last-name";

export interface UpdateFirstName {
  type: typeof UPDATE_FIRST_NAME;
  payload: string;
}

export interface UpdateLastName {
  type: typeof UPDATE_LAST_NAME;
  payload: string;
}

export type MainDispatchTypes = UpdateFirstName | UpdateLastName;
