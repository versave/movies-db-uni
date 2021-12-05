import React, {useEffect, useRef, useState} from 'react';
import classes from './MovieDescription.module.scss';
import {Movie} from "../../data/movies";
import {Container} from "../Container/Container";

interface MovieDescriptionProps {
    movie: Movie;
    closeDescription: () => void;
}

export const MovieDescription: React.FC<MovieDescriptionProps> = ({
    movie,
    closeDescription,
}: MovieDescriptionProps) => {
    const [animate, setAnimate] = useState(true);
    const panelContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('click', listenToClickAway);

        return () => {
            window.removeEventListener('click', listenToClickAway);
        }
    }, []);

    const listenToClickAway = (event: MouseEvent) => {
        if (event.target === panelContainer.current) {
            handleClose();
        }
    }

    const handleClose = () => {
        setAnimate(false);
        setTimeout(() => closeDescription(), parseInt(classes.baseTransition));
    }

    return (
        <div
            ref={panelContainer} className={`${classes.container} ${animate ? classes.animateIn : classes.animateOut}`}>
            <div className={classes.panel}>
                <button className={classes.close} onClick={handleClose} />

                <Container>
                    <div className={classes.panelContent}>
                        <div className={classes.poster} style={{backgroundImage: `url(${movie.poster})`}} />

                        <div className={classes.content}>
                            <h2>{movie.name}</h2>

                            <div className={classes.meta}>
                                <div className={classes.info}>
                                    <em>
                                        <span>{movie.year}</span>

                                        <span>{movie.mpaFilmRating}</span>
                                    </em>
                                </div>

                                <div className={classes.tags}>
                                    {movie.tags.map((tag, idx) => (
                                        <span key={`${movie.name}-tag-${idx}`} className={classes.tag}>
                                            <em>{tag}</em>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={classes.involved}>
                                <p>
                                    <span>Director:</span>

                                    {movie.director}
                                </p>

                                <p>
                                    <span>Stars:</span>

                                    {movie.starActors.join(', ')}
                                </p>
                            </div>

                            <p>{movie.plot}</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
