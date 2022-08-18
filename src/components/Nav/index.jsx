import { Link } from "react-router-dom";
import { NavStyle } from "./styles";

const Nav = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <NavStyle>
      <h1>Kenzie Hub</h1>
      <Link to={"/login"} onClick={clearLocalStorage}>
        Sair
      </Link>
    </NavStyle>
  );
};

export default Nav;
