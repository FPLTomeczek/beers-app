import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to="/">
        <button>Go Back To Beers List</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
