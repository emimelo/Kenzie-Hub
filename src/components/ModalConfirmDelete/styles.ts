import styled from "styled-components";

const ContainerModal = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: fixed;

  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(18, 18, 20, 0.9);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: inherit;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 2.188rem;

  width: 18.5rem;
  max-width: 100%;

  position: relative;

  background-color: var(--color-grey-3);
  border-radius: 0.313rem;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 23.063rem;
    height: auto;

    button {
      height: 3rem;
    }
  }
`;

const DivClose = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 60px;

  background-color: var(--color-negative);

  h2 {
    font-size: 0.875rem;
    line-height: 1.5;

    color: var(--color-grey-0);

    text-align: center;
    margin-left: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 90%;

  button {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2.406rem;

    font-size: 1rem;
    font-weight: 500;

    color: var(--color-grey-0);
    background-color: var(--color-primary);

    border-radius: 4px;

    transition: 0.5s;

    &:hover {
      background-color: var(--color-primary-focus);
    }
  }

  button + button {
    background-color: var(--color-grey-1);

    &:hover {
      background-color: var(--color-negative);
    }
  }

  @media screen and (min-width: 768px) {
    button {
      height: 2.8125rem;
    }
  }
`;

export { ContainerModal, Container, Modal, DivClose, ContainerButtons };
