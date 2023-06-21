import React, { createContext, useReducer, useContext } from "react";
import { Beer } from "../types/Beer";
import { beersReducer, BeersActions } from "../reducers/beersReducer";

type BeersStateType = {
  beers: Beer[];
  isLoading: boolean;
};

const initialState = {
  beers: [],
  isLoading: false,
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
