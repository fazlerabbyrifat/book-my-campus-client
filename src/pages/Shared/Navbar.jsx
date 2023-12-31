import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Colleges</Link>
      </li>
      <li>
        <Link to="/">Admission</Link>
      </li>
      <li>
        <Link to="/">My Colleges</Link>
      </li>
      {
        user && <li>
          <Link>{user?.displayName}</Link>
        </li>
      }
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-gray-800 p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <span className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-primary">
            <Link to="/">Book My Campus</Link>
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        ) : (
          <Link to="/login"><button className="btn btn-primary">Login</button></Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
