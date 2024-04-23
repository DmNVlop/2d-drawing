import { Link } from "react-router-dom";
import "./not-found-page.css";

function NotFoundPage() {
  return (
    <>
      <div id="not-found-page">
        <h1>UPs, Didn&apos;t found</h1>

        <ul id="not-found-nav">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/countertop">Countertops</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NotFoundPage;
