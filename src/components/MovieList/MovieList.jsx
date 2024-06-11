import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => (
  <ul className={css.list}>
    {movies.map((movie) => (
      <li key={movie.id} className={css.item}>
        <Link to={`/movies/${movie.id}`} state={location}>
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
