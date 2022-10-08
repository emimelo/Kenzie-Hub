import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerPassword, Form } from "./styles";
import schema from "../../validators/loginUser";

import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

export interface IUserLogin {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { signIn } = useContext(AuthContext);
  const [isView, setIsView] = useState<boolean>(false);

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
      />
      <span>{errors.email?.message}</span>

      <label htmlFor="password">Senha</label>
      {isView ? (
        <ContainerPassword>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setIsView(!isView)}
            className="btn-password"
          >
            <BsEyeFill />
          </button>
        </ContainerPassword>
      ) : (
        <ContainerPassword>
          <input
            type="text"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setIsView(!isView)}
            className="btn-password"
          >
            <BsEyeSlashFill />
          </button>
        </ContainerPassword>
      )}

      <span>{errors.password?.message}</span>

      <button type="submit" className="btn-signIn">
        Entrar
      </button>

      <p>Ainda não possui uma conta?</p>
      <Link to={"/register"}>Cadastre-se</Link>
    </Form>
  );
};

export default FormLogin;
