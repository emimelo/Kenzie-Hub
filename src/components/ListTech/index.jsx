import { List } from "./styles";
import { CgTrash } from "react-icons/cg";

import api from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";

const ListTech = ({ list }) => {
  const { setTech } = useContext(AuthContext);

  const techDelete = async () => {
    const token = localStorage.getItem("@user:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api.delete(`/users/techs/${list.id}`);

    setTech((oldTechs) => oldTechs.filter((elem) => elem.id !== list.id));
  };

  return (
    <List>
      <h2>{list.title}</h2>
      <div>
        <span>{list.status}</span>
        <button onClick={techDelete}>
          <CgTrash />
        </button>
      </div>
    </List>
  );
};

export default ListTech;
