import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  margin: 0 auto;

  h2 {
    color: var(--color-grey-0);
  }

  p {
    color: var(--color-grey-0);
  }

  ul {
    width: 100%;
    height: 23.25rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.375rem 0rem;
    margin-bottom: 1.25rem;

    border-radius: 4px;
    background-color: var(--color-grey-3);

    overflow-x: auto;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export { Container, ContainerMain };
