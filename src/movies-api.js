import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGZlMjQyZmM5YTRiMTUzNmM4OTE2OWMxMjZjMGZiYSIsInN1YiI6IjY2NjQ0YzA0OWMzMDRhMjYwOWQwMmJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uHbFcINTM3r1p0VngfVTt84k4r0eE0W-wOvKiNjzaR8",
//   },
//   params: {
//     query: searchQuery,
//     page,
//     per_page: 12,
//   },
// };

export const getMoviesApi = async (searchQuery, page) => {
  const { data } = await axios
    .get(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGZlMjQyZmM5YTRiMTUzNmM4OTE2OWMxMjZjMGZiYSIsInN1YiI6IjY2NjQ0YzA0OWMzMDRhMjYwOWQwMmJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uHbFcINTM3r1p0VngfVTt84k4r0eE0W-wOvKiNjzaR8",
      },
      params: {
        query: searchQuery,
        page,
        per_page: 12,
      },
    })
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return data.results;
};
