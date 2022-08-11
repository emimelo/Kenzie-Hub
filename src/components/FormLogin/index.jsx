import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/loginUser";
import api from "../../services/api";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Form } from "./styles";
import toast from "react-hot-toast";
import { useState } from "react";

const FormLogin = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        localStorage.setItem("@user:token", res.data.token);
        localStorage.setItem("@user:id", res.data.user.id);

        toast.success("Bem vindo(a)!", {
          style: {
            borderRadius: "4px",
            background: "var(--color-grey-2)",
            color: "var(--color-grey-0)",
          },
        });
        navigate("/dashboard", { replace: true });
      })
      .catch(() =>
        toast.error("Email e/ou senha inválidos.", {
          style: {
            borderRadius: "4px",
            background: "var(--color-grey-2)",
            color: "var(--color-grey-0)",
          },
        })
      );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
