import type {NextPage} from 'next'
import classes from '../styles/Home.module.scss'
import {Container} from "../components/Container/Container";
import {moviesData} from "../data/movies";
import {MovieItem} from "../components/MovieItem/MovieItem";

const Home: NextPage = () => {
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
            </Container>
        </div>
    )
}

export default Home
