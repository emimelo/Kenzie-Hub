import loading from "../../assets/loading.svg";
import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <img src={loading} alt="Animation loading" />
    </Container>
  );
};

export default Loading;
