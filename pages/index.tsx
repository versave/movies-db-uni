import type {NextPage} from 'next'
import classes from '../styles/Home.module.scss'
import {Container} from "../components/Container/Container";
import {moviesData} from "../data/movies";
import {MovieItem} from "../components/MovieItem/MovieItem";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenToWindowScroll);

        return () => {
            window.removeEventListener('scroll', listenToWindowScroll);
        }
    }, []);

    const listenToWindowScroll = () => {
        const scrollToTopThreshold = 200;
        setShowScrollTopButton(window.scrollY >= scrollToTopThreshold);
    }

    const scrollWindowTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className={classes.home}>
            <Container>
                <div className={classes.movies}>
                    {moviesData.map((movie, idx) => (
                        <div key={`movie-${idx}`} className={classes.movie}>
                            <MovieItem movie={movie} />
                        </div>
                    ))}
                </div>

                <button
                    className={`${classes.scrollTop} ${showScrollTopButton ? classes.visible : ''}`}
                    onClick={scrollWindowTop}
                />
            </Container>
        </div>
    )
}

export default Home
