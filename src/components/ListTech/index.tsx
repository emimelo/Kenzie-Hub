import { useContext } from "react";

import { CrudContext } from "../../providers/CrudContext";

import { List } from "./styles";

const ListTech = ({ list }: any) => {
  const { openModal } = useContext(CrudContext);

  return (
    <>
      <List onClick={() => openModal(list)}>
        <h2>{list.title}</h2>
        <div>
          <span>{list.status}</span>
        </div>
      </List>
    </>
  );
};

export default ListTech;
