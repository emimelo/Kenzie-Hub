import { Nav, Header, ContainerMain } from "./styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const id = localStorage.getItem("@user:id");

      if (id) {
        const userLogin = await api.get(`/users/${id}`);
        return setUser(userLogin);
      }
    }

    loadUser();
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <Nav>
        <h1>Kenzie Hub</h1>
        <Link to={"/login"} onClick={clearLocalStorage}>
          Sair
        </Link>
      </Nav>
      <Header>
        <div>
          <h2>Olá, {user?.data.name}</h2>
          <p>{user?.data.course_module}</p>
        </div>
      </Header>
      <ContainerMain>
        <ul>
          <li>
            <h2>Que pena estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </li>
        </ul>
      </ContainerMain>
    </>
  );
};

export default Dashboard;
