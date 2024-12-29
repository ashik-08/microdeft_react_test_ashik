import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../../assets/logo.png";
import CloseIcon from "../../SVG/CloseIcon";
import MenuIcon from "../../SVG/MenuIcon";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const navigation = [
    { title: "Add Course", path: "/add-course" },
    { title: "Course List", path: "/course-list" },
  ];

  return (
    <nav className="bg-white border-b w-full md:static md:text-sm md:border-none">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <img src={logoImg} width={150} alt="Microdeft logo" />
          </Link>
          <div className="md:hidden flex mt-1">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-primary-600 font-semibold" : ""
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              {isLoggedIn ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full py-3 px-4 font-medium text-center text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow md:inline transition-colors duration-300"
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block py-3 text-center text-gray-700 hover:text-primary-600 border rounded-lg md:border-none transition-colors duration-300"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block py-3 px-4 font-medium text-center text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow md:inline transition-colors duration-300"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
