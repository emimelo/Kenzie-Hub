import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "./styles";
import schema from "../../validators/registerUser";
import React from "react";

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const FormRegister = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { signRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit(signRegister)}>
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
          cursor: isDisabled && "default",
        }}
      >
        Cadastrar
      </button>
    </Form>
  );
};

export default FormRegister;
