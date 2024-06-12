import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMoviesByQuery } from "../../movies-api";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      getMoviesByQuery(query).then(setMovies);
    }
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const queryValue = form.elements.query.value.trim();
    if (queryValue) {
      setSearchParams({ query: queryValue });
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setSearchParams({ query: e.target.value })}
          className={css.input}
          placeholder="Search movies..."
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
