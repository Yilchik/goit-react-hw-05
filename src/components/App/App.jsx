import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import css from "./App.module.css";

function App() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/movies" element={<MoviesPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
