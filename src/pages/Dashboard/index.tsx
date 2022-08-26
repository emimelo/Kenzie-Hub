import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";
import React from "react";

import { Container, ContainerMain } from "./styles";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Main from "../../components/Main";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <>
      <Container>
        <Nav />
        <Header />
        <ContainerMain>
          <Main setModal={setModal} />
        </ContainerMain>
      </Container>
      {modal && <Modal setModal={setModal} />}
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Dashboard;
