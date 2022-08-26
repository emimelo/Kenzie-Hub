import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { IoIosAdd } from "react-icons/io";
import React from "react";

import { CreateTech, DivNoTech } from "./styles";
import ListTech from "../ListTech";

const Main = ({ setModal }) => {
  const { tech } = useContext(AuthContext);

  return (
    <>
      <CreateTech>
        <h2>Tecnologias</h2>
        <button onClick={() => setModal(true)}>
          <IoIosAdd />
        </button>
      </CreateTech>
      {tech.length > 0 ? (
        <ul>
          {tech.map((list) => (
            <ListTech key={list.id} list={list} />
          ))}
        </ul>
      ) : (
        <DivNoTech>
          <p>Você ainda não possui uma tecnologia cadastrada :(</p>
        </DivNoTech>
      )}
    </>
  );
};

export default Main;
