import React, { createContext, useReducer, useContext } from "react";
import { Beer } from "../interfaces/Beer";
import { beersReducer, BeersActions } from "../reducers/beersReducer";

export type BeersStateType = {
  beersList: Beer[];
  beersListPage: number;
  isBeersListLoading: boolean;
  singleBeer: Beer[];
  isSingleBeerLoading: boolean;
  isError: { value: boolean; msg: string };
};

export const initialState = {
  beersList: [],
  beersListPage: 1,
  isBeersListLoading: false,
  singleBeer: [],
  isSingleBeerLoading: false,
  isError: { value: false, msg: "" },
};

const BeersContext = createContext<{
  state: BeersStateType;
  dispatch: React.Dispatch<BeersActions>;
}>({ state: initialState, dispatch: () => null });

const BeersProvider = ({ children }: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(beersReducer, initialState);

  return (
    <BeersContext.Provider value={{ state, dispatch }}>
      {children}
    </BeersContext.Provider>
  );
};

export const useBeersContext = () => {
  return useContext(BeersContext);
};

export default BeersProvider;
