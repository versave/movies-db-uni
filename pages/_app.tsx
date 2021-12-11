import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {Layout} from "../components/Layout/Layout";
import React, {useState} from "react";
import { moviesData } from "../data/movies";
import {ContextInterface, ContextState, MoviesInterface} from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
    const [movies, setMovies] = useState<MoviesInterface>({
        staticMovies: moviesData,
        filteredMovies: moviesData,
    });

    const contextState: ContextInterface = {
        movies,
        setMovies,
    }

  return (
      <ContextState.Provider value={contextState}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </ContextState.Provider>
  )
}

export default MyApp
