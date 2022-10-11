import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ContainerModal,
  Container,
  Modal,
  DivClose,
  ContainerButtons,
} from "./styles";

import { CrudContext } from "../../providers/CrudContext";

const ModalConfirmDelete = () => {
  const { modalConfirmDelete, setModalConfirmDelete, techDelete } =
    useContext(CrudContext);

  return (
    <AnimatePresence>
      {modalConfirmDelete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <ContainerModal>
            <Container>
              <Modal>
                <DivClose>
                  <h2>Tem certeza que deseja deletar essa tecnologia?</h2>
                </DivClose>
                <ContainerButtons>
                  <button
                    type="button"
                    onClick={() => setModalConfirmDelete(false)}
                  >
                    Não
                  </button>
                  <button type="button" onClick={techDelete}>
                    Excluir
                  </button>
                </ContainerButtons>
              </Modal>
            </Container>
          </ContainerModal>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalConfirmDelete;
