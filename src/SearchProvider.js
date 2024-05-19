import {createContext, useReducer} from "react";

export const StateContext = createContext();

export const SearchProvider = (reducer, initialState, children) => (
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
)
