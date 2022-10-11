import { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ContainerModal,
  Container,
  ModalForm,
  DivClose,
  CloseModal,
} from "./styles";

import { CrudContext } from "../../providers/CrudContext";
import { ITech } from "../../providers/AuthContext";
import schema from "../../validators/modalCreateTech";

const Modal = () => {
  const { modal, setModal, createTech } = useContext(CrudContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(schema),
  });

  return (
    <AnimatePresence>
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <ContainerModal>
            <Container>
              <ModalForm>
                <DivClose>
                  <h2>Cadastrar Tecnologia</h2>
                  <CloseModal
                    onClick={() => {
                      setModal(false);
                      reset();
                    }}
                  >
                    <IoIosClose />
                  </CloseModal>
                </DivClose>
                <form
                  onSubmit={(e) => {
                    handleSubmit(createTech)(e);
                    reset();
                  }}
                >
                  <label htmlFor="title">Nome</label>
                  <input
                    type="text"
                    placeholder="Tecnologia"
                    {...register("title")}
                  />
                  <span>{errors.title?.message}</span>

                  <label htmlFor="status">Selecionar status</label>
                  <select {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                  <button type="submit">Cadastrar</button>
                </form>
              </ModalForm>
            </Container>
          </ContainerModal>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
