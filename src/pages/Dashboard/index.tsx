import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";

import { Container, ContainerMain } from "./styles";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Main from "../../components/Main";

const Dashboard = () => {
  const { user, loading, modal } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <>
      <Container>
        <Nav />
        <Header />
        <ContainerMain>
          <Main />
        </ContainerMain>
      </Container>
      {modal && <Modal />}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Dashboard;
