import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 20, 0.5);

  img {
    width: 100px;
  }

  @media screen and (min-width: 425px) {
    img {
      width: 180px;
    }
  }
`;

export { Container };
