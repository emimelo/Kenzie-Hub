import FormRegister from "../../components/FormRegister";
import { Link } from "react-router-dom";
import React from "react";

import { ContainerMain, ContainerForm } from "./styles";

const Register = () => {
  return (
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
  );
};

export default Register;
