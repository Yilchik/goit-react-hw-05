import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import { getTrendingMovies } from "../../movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
