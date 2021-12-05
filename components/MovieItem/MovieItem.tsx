import React, {useState} from 'react';
import {Movie} from "../../data/movies";
import classes from './MovieItem.module.scss';
import {MovieDescription} from "../MovieDescription/MovieDescription";

interface MovieItemProps {
    movie: Movie,
}

export const MovieItem: React.FC<MovieItemProps> = ({
    movie,
}: MovieItemProps) => {
    const [movieOpened, setMovieOpened] = useState(false);

    return (
        <>
            <div className={classes.movie}>
                <div
                    className={classes.poster}
                    style={{backgroundImage: `url(${movie.poster})`}}
                    onClick={() => setMovieOpened(true)}
                />

                <h3>{movie.name}</h3>

                <p>
                    <em>({movie.year})</em>
                </p>
            </div>

            {movieOpened && <MovieDescription movie={movie} closeDescription={() => setMovieOpened(false)} />}
        </>
    );
}
