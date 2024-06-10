import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={css.errorPage}>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className={css.homeLink}>
        Go back to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
