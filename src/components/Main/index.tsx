import { useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { useLottie } from "lottie-react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { AuthContext } from "../../providers/AuthContext";
import { CrudContext } from "../../providers/CrudContext";

import { CreateTech, DivNoTech } from "./styles";
import ListTech from "../ListTech";

import animate from "../../assets/animate.json";

const Main = () => {
  const { tech } = useContext(AuthContext);
  const { setModal } = useContext(CrudContext);

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
          <TransitionGroup className="transition-list">
            {tech.map((list) => (
              <CSSTransition timeout={200} classNames="item">
                <ListTech key={list.id} list={list} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
