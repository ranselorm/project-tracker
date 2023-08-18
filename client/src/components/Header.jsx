import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mb-10">
      <div className="container py-3 flex justify-between">
        <Link to={"/"} className="navbar-brand">
          <div>
            <span>ProMGMT</span>
          </div>
        </Link>
        <Link>
          <div className="flex items-start gap-x-5">
            <Link>Login</Link>
            <Link className="">Signup</Link>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
