import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <p>
        {" "}
        <Link to="/"> Home </Link>{" "}
      </p>
      <p>
        {" "}
        <Link to="/ayat-audio"> Audio </Link>{" "}
      </p>
    </div>
  );
}
