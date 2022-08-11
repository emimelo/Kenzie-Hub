import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/registerUser";
import api from "../../services/api";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { Form } from "./styles";
import { useState } from "react";

const FormRegister = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await api
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!", {
          style: {
            borderRadius: "4px",
            background: "var(--color-grey-2)",
            color: "var(--color-grey-0)",
          },
        });
        navigate("/login", { replace: true });
      })
      .catch(() =>
        toast.error("Ops! Já existe um cadastro com este email.", {
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
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>

      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        onChange={() => setIsDisabled(false)}
      />
      <span>{errors.name?.message}</span>

      <label htmlFor="email">Email</label>
      <input
        type="text"
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

      <label htmlFor="confirmPassword">Confirmar senha</label>
      <input
        type="password"
        placeholder="Confirme aqui sua senha"
        {...register("confirmPassword")}
      />
      <span>{errors.confirmPassword?.message}</span>

      <label htmlFor="bio">Bio</label>
      <input type="text" placeholder="Fale sobre você" {...register("bio")} />
      <span>{errors.bio?.message}</span>

      <label htmlFor="contact">Contato</label>
      <input
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
      />
      <span>{errors.contact?.message}</span>

      <label htmlFor="course_module">Selecionar módulo</label>
      <select {...register("course_module")}>
        <option value="Primeiro módulo">Primeiro módulo</option>
        <option value="Segundo módulo">Segundo módulo</option>
        <option value="Terceiro módulo">Terceiro módulo</option>
        <option value="Quarto módulo">Quarto módulo</option>
        <option value="Quinto módulo">Quinto módulo</option>
        <option value="Sexto módulo">Sexto módulo</option>
      </select>

      <button
        type="submit"
        disabled={isDisabled}
        style={{
          backgroundColor: isDisabled && "var(--color-primary-negative)",
        }}
      >
        Cadastrar
      </button>
    </Form>
  );
};

export default FormRegister;
