import api from "../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "../../validators/modalCreateTech";

import { useContext, useState } from "react";
import React from "react";

import {
  ContainerModal,
  Container,
  ModalForm,
  DivClose,
  CloseModal,
} from "./styles";

import { IoIosClose } from "react-icons/io";
import toast from "react-hot-toast";
import ToastStyle from "../ToastStyle/styles";
import { AuthContext } from "../../providers/AuthContext";

interface ITech {
  title: string;
  status: string;
}

const Modal = ({ setModal }: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { setTech } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(schema),
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const createTech = async (data: ITech) => {
    try {
      const token = localStorage.getItem("@user:token");

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data: newTech } = await api.post("/users/techs", data);

      setTech((oldTech) => [...oldTech, newTech]);

      toast.success("Tecnologia criada com sucesso!", ToastStyle);
      setModal(false);
    } catch {
      toast.error(
        "Ops! Você já possui essa tecnologia cadastrada.",
        ToastStyle
      );
    }
  };

  return (
    <ContainerModal>
      <Container>
        <ModalForm>
          <DivClose>
            <h2>Cadastrar Tecnologia</h2>
            <CloseModal onClick={() => setModal(false)}>
              <IoIosClose />
            </CloseModal>
          </DivClose>
          <form onSubmit={handleSubmit(createTech)}>
            <label htmlFor="title">Nome</label>
            <input
              type="text"
              placeholder="Tecnologia"
              {...register("title")}
              onChange={() => setIsDisabled(false)}
            />
            <span>{errors.title?.message}</span>

            <label htmlFor="status">Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
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
          </form>
        </ModalForm>
      </Container>
    </ContainerModal>
  );
};

export default Modal;
