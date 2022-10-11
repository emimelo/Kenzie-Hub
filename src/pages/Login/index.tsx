import { motion } from "framer-motion";

import { ContainerMain } from "./styles";

import FormLogin from "../../components/FormLogin";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ContainerMain>
        <header>
          <h1>Kenzie Hub</h1>
        </header>
        <div className="container-form">
          <FormLogin />
        </div>
      </ContainerMain>
    </motion.div>
  );
};

export default Login;
