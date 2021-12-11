import {Movie} from "../data/movies";
import {createContext, useContext} from "react";

export interface MoviesInterface {
    staticMovies: Movie[];
    filteredMovies: Movie[];
}

export interface ContextInterface {
    movies: MoviesInterface;
    setMovies: (movies: MoviesInterface) => void;
}

export const ContextState = createContext<ContextInterface>({
    movies: {
        staticMovies: [],
        filteredMovies: [],
    },
    setMovies: () => null,
})

export const useSiteContext = () => useContext(ContextState);
