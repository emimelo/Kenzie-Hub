import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import { NavStyle } from "./styles";

const Nav = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <NavStyle>
      <h1>Kenzie Hub</h1>
      <Link to={"/login"} onClick={clearLocalStorage}>
        <FiLogOut />
      </Link>
    </NavStyle>
  );
};

export default Nav;
