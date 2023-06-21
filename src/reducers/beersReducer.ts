import { Beer } from "../interfaces/Beer";
import { BeersStateType, initialState } from "../context/BeersContext";
import { Direction } from "../enums/Direction";

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
  AddBeers = "ADD_BEERS",
  IsBeersListLoading = "IS_BEERS_LIST_LOADING",
  IsSingleBeerLoading = "IS_SINGLE_BEER_LOADING",
  SetBeer = "SET_BEER",
  SetPage = "SET_PAGE",
  SetError = "SET_ERROR",
}

type BeersPayload = {
  [Types.AddBeers]: Beer[];
  [Types.IsBeersListLoading]: boolean;
  [Types.IsSingleBeerLoading]: boolean;
  [Types.SetBeer]: Beer[];
  [Types.SetPage]: Direction;
  [Types.SetError]: { value: boolean; msg: string };
};

export type BeersActions =
  ActionMap<BeersPayload>[keyof ActionMap<BeersPayload>];

export const beersReducer = (state: BeersStateType, action: BeersActions) => {
  switch (action.type) {
    case Types.AddBeers:
      return {
        ...state,
        beersList: action.payload,
      };
    case Types.IsBeersListLoading:
      return {
        ...state,
        isBeersListLoading: action.payload,
      };
    case Types.IsSingleBeerLoading:
      return {
        ...state,
        isSingleBeerLoading: action.payload,
      };
    case Types.SetBeer:
      return {
        ...state,
        singleBeer: action.payload,
      };
    case Types.SetPage:
      if (action.payload === Direction.PREV) {
        return {
          ...state,
          beersListPage:
            state.beersListPage - 1 > 0
              ? state.beersListPage - 1
              : state.beersListPage,
        };
      } else if (action.payload === Direction.NEXT) {
        return {
          ...state,
          beersListPage: state.beersListPage + 1,
        };
      }
      return { ...state };
    case Types.SetError:
      return {
        ...initialState,
        beersListPage: state.beersListPage,
        isError: action.payload,
      };
  }
};
