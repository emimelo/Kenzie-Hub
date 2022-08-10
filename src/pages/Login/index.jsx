import FormLogin from "../../components/FormLogin";
import { ContainerMain } from "./styles";

const Login = () => {
  return (
    <ContainerMain>
      <header>
        <h1>Kenzie Hub</h1>
      </header>
      <div>
        <FormLogin />
      </div>
    </ContainerMain>
  );
};

export default Login;
