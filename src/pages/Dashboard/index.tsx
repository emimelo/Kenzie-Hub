import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthContext";

import { motion } from "framer-motion";
import { Container, ContainerMain } from "./styles";

import Modal from "../../components/Modal";
import ModalEdit from "../../components/ModalEdit";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Loading from "../../components/Loading";
import ModalConfirmDelete from "../../components/ModalConfirmDelete";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return user.id ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Container>
        <Nav />
        <Header />
        <ContainerMain>
          <Main />
        </ContainerMain>
      </Container>
      <Modal />
      <ModalEdit />
      <ModalConfirmDelete />
    </motion.div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Dashboard;
