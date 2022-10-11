import { useContext } from "react";

import { AuthContext } from "../../providers/AuthContext";

import { HeaderStyle } from "./styles";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <HeaderStyle>
      <div>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </div>
    </HeaderStyle>
  );
};

export default Header;
