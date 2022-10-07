import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";

import { Container, ContainerMain } from "./styles";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { user, loading, modal } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return user ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <Nav />
        <Header />
        <ContainerMain>
          <Main />
        </ContainerMain>
      </Container>
      {modal && <Modal />}
    </motion.div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Dashboard;
