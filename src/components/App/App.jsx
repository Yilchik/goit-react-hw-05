import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
