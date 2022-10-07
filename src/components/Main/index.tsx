import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { IoIosAdd } from "react-icons/io";
import { useLottie } from "lottie-react";
import animate from "../../assets/animate.json";

import { CreateTech, DivNoTech } from "./styles";
import ListTech from "../ListTech";

const Main = () => {
  const { tech, setModal } = useContext(AuthContext);

  const options = {
    animationData: animate,
    loop: true,
  };

  const { View } = useLottie(options);

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
          <p>Você ainda não possui uma tecnologia cadastrada</p>
          <div>{View}</div>
        </DivNoTech>
      )}
    </>
  );
};

export default Main;
