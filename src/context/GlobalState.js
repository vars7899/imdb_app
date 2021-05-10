import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer.js";

//intial state
const intialState = {
    nominate: localStorage.getItem("nominate")
        ? JSON.parse(localStorage.getItem("nominate"))
        : [],
};

//create contex
export const GlobalContext = createContext(intialState);

//provider
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    useEffect(() => {
        localStorage.setItem("nominate", JSON.stringify(state.nominate));
    }, [state]);

    //actions
    const addMovieToNominate = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_NOMINATE", payload: movie });
    };

    const removeMovieFromNominate = (imdbID) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_NOMINATE", payload: imdbID });
    };

    return (
        <GlobalContext.Provider
            value={{
                nominate: state.nominate,
                addMovieToNominate,
                removeMovieFromNominate,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
