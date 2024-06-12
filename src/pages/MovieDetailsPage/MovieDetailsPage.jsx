import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";
import { AiOutlineRotateLeft } from "react-icons/ai";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location.state);
  const backLinkHref = useRef(location.state || "/");

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "https://via.placeholder.com/500x750";

  return (
    <div className={css.container}>
      <Link to={backLinkHref.current} className={css.goBackBtn}>
        <AiOutlineRotateLeft className={css.goBackIcon} />
        Go back
      </Link>
      <div className={css.movieDetail}>
        <img src={imageUrl} alt={movie.title} className={css.moviePoster} />
        <div className={css.movieInfo}>
          <h1 className={css.movieTitle}>{movie.title}</h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h2>Additional information</h2>
        <ul>
          <li className={css.item}>
            <Link to="cast" className={css.link} state={backLinkHref.current}>
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link
              to="reviews"
              className={css.link}
              state={backLinkHref.current}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
