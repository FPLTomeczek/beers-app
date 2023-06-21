import { Beer } from "../types/Beer";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Add_Beers = "ADD_BEERS",
  IsLoading = "IS_LOADING",
}

type BeersStateType = {
  beers: Beer[];
  isLoading: boolean;
};

type BeersPayload = {
  [Types.Add_Beers]: Beer[];
  [Types.IsLoading]: boolean;
};

export type BeersActions =
  ActionMap<BeersPayload>[keyof ActionMap<BeersPayload>];

export const beersReducer = (state: BeersStateType, action: BeersActions) => {
  switch (action.type) {
    case Types.Add_Beers:
      return {
        ...state,
        beers: action.payload,
      };
    case Types.IsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
  }
};
