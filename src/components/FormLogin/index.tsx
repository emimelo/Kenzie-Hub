import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./styles";
import schema from "../../validators/loginUser";
import React from "react";

import { Link } from "react-router-dom";

import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";

export interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit(signIn)}>
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Digite aqui seu email"
        {...register("email")}
        onChange={() => setIsDisabled(false)}
      />
      <span>{errors.email?.message}</span>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <span>{errors.password?.message}</span>

      <button
        type="submit"
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled && "var(--color-primary-negative)",
          cursor: isDisabled && "default",
        }}
      >
        Entrar
      </button>

      <p>Ainda não possui uma conta?</p>
      <Link to={"/register"}>Cadastre-se</Link>
    </Form>
  );
};

export default FormLogin;
