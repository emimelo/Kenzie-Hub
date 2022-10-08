import styled from "styled-components";

const ContainerMain = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    120deg,
    var(--color-grey-4),
    var(--color-grey-4),
    var(--color-primary-focus),
    var(--color-primary-focus)
  );

  background-size: 400% 400%;
  animation: colors 15s ease infinite;

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 30% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  header {
    margin-top: 3.625rem;
  }

  header > h1 {
    color: var(--color-primary);
    text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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
