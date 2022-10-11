import { Container } from "./styles";
import loading from "../../assets/loading.svg";

const Loading = () => {
  return (
    <Container>
      <img src={loading} alt="Animation loading" />
    </Container>
  );
};

export default Loading;
