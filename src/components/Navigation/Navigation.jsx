import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => (
  <nav className={css.nav}>
    <NavLink to="/">Home Page</NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
);

export default Navigation;
