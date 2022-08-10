import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/loginUser";
import api from "../../services/api";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Form } from "./styles";

const FormLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await api.post("/sessions", data);

    localStorage.setItem("@user:token", response.data.token);
    localStorage.setItem("@user:id", response.data.user.id);

    navigate("/dashboard", { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <span>{errors.email?.message}</span>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <span>{errors.password?.message}</span>

      <button type="submit">Entrar</button>

      <p>Ainda não possui uma conta?</p>
      <Link to={"/register"}>Cadastre-se</Link>
    </Form>
  );
};

export default FormLogin;
