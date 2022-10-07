import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";

import { Container, ContainerMain } from "./styles";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";

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
    </motion.div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Dashboard;
