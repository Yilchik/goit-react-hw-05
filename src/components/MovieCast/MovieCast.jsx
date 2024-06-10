import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { getMovieCast } from "../../movies-api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
              className={css.castImage}
            />
            <p className={css.castName}>{actor.name}</p>
            <p className={css.castCharacter}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
