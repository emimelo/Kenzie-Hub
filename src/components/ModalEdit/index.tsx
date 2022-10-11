import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

import {
  ContainerModal,
  Container,
  ModalForm,
  DivClose,
  CloseModal,
  ContainerButtons,
} from "./styles";

import { CrudContext, ITech } from "../../providers/CrudContext";

const ModalEdit = () => {
  const { modalEdit, setModalEdit, setModalConfirmDelete, updateTech, list } =
    useContext(CrudContext);

  const { register, handleSubmit, reset } = useForm<ITech>();

  return (
    <AnimatePresence>
      {modalEdit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <ContainerModal>
            <Container>
              <ModalForm>
                <DivClose>
                  <h2>Tecnologia Detalhes</h2>
                  <CloseModal
                    onClick={() => {
                      setModalEdit(false);
                      reset();
                    }}
                  >
                    <IoIosClose />
                  </CloseModal>
                </DivClose>
                <form onSubmit={handleSubmit(updateTech)}>
                  <label htmlFor="title">Nome do Projeto</label>
                  <input type="text" placeholder={list.title} disabled={true} />

                  <label htmlFor="status">Status</label>
                  <select {...register("status")}>
                    {list.status === "Iniciante" ? (
                      <>
                        <option value={list.status}>{list.status}</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                      </>
                    ) : list.status === "Intermediário" ? (
                      <>
                        <option value={list.status}>{list.status}</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Avançado">Avançado</option>
                      </>
                    ) : (
                      <>
                        <option value={list.status}>{list.status}</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                      </>
                    )}
                  </select>
                  <ContainerButtons>
                    <button type="submit">Salvar alterações</button>
                    <button
                      type="button"
                      onClick={() => setModalConfirmDelete(true)}
                    >
                      Excluir
                    </button>
                  </ContainerButtons>
                </form>
              </ModalForm>
            </Container>
          </ContainerModal>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalEdit;
