import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMoviesByQuery } from "../../movies-api";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getMoviesByQuery(query).then(setMovies);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
