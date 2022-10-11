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

    padding: 1.375rem 0rem;
    margin-bottom: 1.25rem;

    border-radius: 4px;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background: linear-gradient(
      45deg,
      var(--color-grey-4),
      var(--color-grey-3),
      var(--color-grey-2)
    );

    background-size: 200% 200%;

    overflow-x: auto;

    .transition-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .item-enter {
      opacity: 0;
    }
    .item-enter-active {
      opacity: 1;
      transition: opacity 200ms ease-in;
    }
    .item-exit {
      opacity: 1;
    }
    .item-exit-active {
      opacity: 0;
      transition: opacity 200ms ease-in;
    }
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export { Container, ContainerMain };
