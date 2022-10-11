import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ContainerMain, ContainerForm } from "./styles";

import FormRegister from "../../components/FormRegister";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ContainerMain>
        <header>
          <div>
            <h1>Kenzie Hub</h1>
            <Link to={"/login"}>Voltar</Link>
          </div>
        </header>
        <ContainerForm>
          <FormRegister />
        </ContainerForm>
      </ContainerMain>
    </motion.div>
  );
};

export default Register;
