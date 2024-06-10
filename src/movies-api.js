import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGZlMjQyZmM5YTRiMTUzNmM4OTE2OWMxMjZjMGZiYSIsInN1YiI6IjY2NjQ0YzA0OWMzMDRhMjYwOWQwMmJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uHbFcINTM3r1p0VngfVTt84k4r0eE0W-wOvKiNjzaR8";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get("/search/movie", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};

export const getMovieCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.cast;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};
