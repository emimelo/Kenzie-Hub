import toast from "react-hot-toast";
import { createContext, useContext, useState } from "react";
import { SubmitHandler } from "react-hook-form/dist/types/form";

import api from "../services/api";

import { AuthContext, ITech } from "./AuthContext";
import { ChildrenProps } from "./AuthContext";

import { ToastError, ToastSuccess } from "../components/ToastStyle/styles";

interface ICrudContext {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setModalConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  createTech: SubmitHandler<ITech>;
  updateTech: SubmitHandler<ITech>;
  techDelete: () => Promise<void>;
  openModal: (listTech: ITech) => void;
  modal: boolean;
  modalEdit: boolean;
  modalConfirmDelete: boolean;
  list: ITech;
}

export const CrudContext = createContext<ICrudContext>({} as ICrudContext);

const CrudProvider = ({ children }: ChildrenProps) => {
  const { setTech, tech } = useContext(AuthContext);

  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [list, setList] = useState<ITech>({} as ITech);

  const createTech = async (data: ITech) => {
    try {
      const token = localStorage.getItem("@user:token");

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data: newTech } = await api.post("/users/techs", data);

      setTech((oldTech) => [...oldTech, newTech]);

      toast.success("Tecnologia cadastrada com sucesso!", ToastSuccess);
      setModal(false);
    } catch {
      toast.error(
        "Ops! Você já possui essa tecnologia cadastrada.",
        ToastError
      );
    }
  };

  const openModal = (listTech: ITech) => {
    setModalEdit(true);
    setList(listTech);
  };

  const updateTech = async (data: ITech) => {
    try {
      const token = localStorage.getItem("@user:token");

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data: updatedTech } = await api.put(
        `/users/techs/${list.id}`,
        data
      );

      const oldTechs = tech.filter((elem) => elem.id !== list.id);

      setTech([updatedTech, ...oldTechs]);

      toast.success("Tecnologia atualizada com sucesso!", ToastSuccess);
      setModalEdit(false);
    } catch {
      toast.error("Ops! Algo deu errado, tente novamente.", ToastError);
    }
  };

  const techDelete = async () => {
    const token = localStorage.getItem("@user:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    await api.delete(`/users/techs/${list.id}`);

    setTech((oldTechs) => oldTechs.filter((elem) => elem.id !== list.id));
    toast.success("Tecnologia deletada com sucesso!", ToastSuccess);
    setModalConfirmDelete(false);
    setModalEdit(false);
  };

  return (
    <CrudContext.Provider
      value={{
        modal,
        modalEdit,
        modalConfirmDelete,
        list,
        createTech,
        updateTech,
        techDelete,
        openModal,
        setModal,
        setModalEdit,
        setModalConfirmDelete,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};

export default CrudProvider;
