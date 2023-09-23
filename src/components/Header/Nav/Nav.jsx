import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav>
      <div className="flex justify-between items-center shadow-xl px-5 pb-4">
        {/* logo part */}
        <div className="logo">
          <Logo></Logo>
        </div>
        <div className="">
          {/* menu link  */}
          <ul className="flex gap-3 text-2xl font-medium">
            <li className="border border-red-700 px-4 py-2 rounded-lg text-gray-800">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline text-red-600 " : ""
                }>
                Home
              </NavLink>
            </li>
            <li className="border border-red-700 px-4 py-2 rounded-lg text-black">
              <NavLink
                to="/favorite"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline text-red-600 " : ""
                }>
                Favorite
              </NavLink>
            </li>
            <li className="border border-red-700 px-4 py-2 rounded-lg text-black">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline text-red-600" : ""
                }>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
