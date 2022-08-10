import styled from "styled-components";

const ContainerMain = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-4);

  header {
    width: 90%;
    margin-top: 3.625rem;
  }

  header > div {
    display: flex;
    justify-content: space-between;

    align-items: center;

    margin: 0 auto;
    margin-bottom: 2.418rem;
  }

  header > div > h1 {
    color: var(--color-primary);

    font-size: 1.25rem;

    margin: 0;
  }

  header > div > a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 1.997rem;
    width: 4.971rem;

    background-color: var(--color-grey-3);
    color: var(--color-grey-0);

    border-radius: 4px;

    font-size: 0.602rem;

    transition: 0.5s;

    &:hover {
      background-color: var(--color-grey-1);
    }
  }

  @media screen and (min-width: 426px) {
    header > div {
      width: 23.063rem;
      margin-bottom: 3.036rem;
    }

    header > div > h1 {
      font-size: 1.563rem;
    }

    header > div > a {
      font-size: 0.75rem;

      height: 2.507rem;
      width: 4.218rem;
    }
  }
`;

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;

  width: 90%;
  height: 44.373rem;

  border-radius: 4px;

  margin-bottom: 3.625rem;

  background-color: var(--color-grey-3);

  @media screen and (min-width: 426px) {
    width: 23.125rem;
    height: 55.699rem;
  }
`;

export { ContainerMain, ContainerForm };
