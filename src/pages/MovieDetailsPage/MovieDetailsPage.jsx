import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";
import { AiOutlineRotateLeft } from "react-icons/ai";
import MovieCast from "../../components/MovieCast/MovieCast";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div className={css.container}>
      <button onClick={handleGoBack} className={css.goBackBtn}>
        <AiOutlineRotateLeft className={css.goBackIcon} />
        Go back
      </button>
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
            <Link to="cast" className={css.link}>
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link to="reviews" className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<MovieCast />} />
        {/* <Route path="reviews" element={<MovieReviews />} /> */}
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
