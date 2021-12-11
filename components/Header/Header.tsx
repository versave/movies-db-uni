import React, {FormEvent} from 'react';
import classes from './Header.module.scss';
import { useSiteContext } from "../../context/context";
import {Movie} from "../../data/movies";

export const Header: React.FC = () => {
    const { movies, setMovies } = useSiteContext();

    const handleOnChange = (event: FormEvent<HTMLInputElement>) => {
        const userInput = event.currentTarget.value.toLowerCase();

        const filteredMovies = movies.staticMovies.filter((movie: Movie) => {
            return movie.name.toLowerCase().includes(userInput);
        });

        setMovies({...movies, filteredMovies, })
    }

    return (
        <div className={classes.header}>
            <h1>
                <em>Movies DB</em>
            </h1>

            <div className={classes.search}>
                <input type="search" placeholder="Search.." onChange={handleOnChange} />
            </div>
        </div>
    );
}
