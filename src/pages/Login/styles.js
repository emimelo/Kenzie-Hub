import styled from "styled-components";

const ContainerMain = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-4);

  header {
    margin-top: 3.625rem;
  }

  header > h1 {
    color: var(--color-primary);

    font-size: 1.25rem;

    margin-bottom: 1.25rem;
  }

  div {
    display: flex;
    justify-content: center;

    width: 90%;
    height: 25.168rem;

    margin-bottom: 3.625rem;

    border-radius: 4px;

    background-color: var(--color-grey-3);
  }

  @media screen and (min-width: 426px) {
    header > h1 {
      font-size: 1.563rem;
      margin-bottom: 2.188rem;
    }
    div {
      width: 23.063rem;
      height: 31.375rem;
    }
  }
`;

export { ContainerMain };
