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

  background-color: rgba(18, 18, 20, 0.5);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: inherit;
`;

const ModalForm = styled.div`
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.938rem;

    width: 90%;

    margin-bottom: 2.625rem;

    label {
      color: var(--color-grey-0);

      font-size: 0.611rem;
      font-weight: 400;
    }

    input,
    select {
      height: 2.406rem;
      font-size: 0.814rem;

      border: 0.9772px solid transparent;
      outline: 0;
      border-radius: 4px;

      padding-left: 1.015rem;

      color: var(--color-grey-0);
      background-color: var(--color-grey-2);

      &:focus {
        border: 0.9772px solid var(--color-grey-0);
      }

      &::placeholder {
        color: var(--color-grey-1);
      }
    }

    span {
      color: var(--color-negative);
      font-size: 0.611rem;
      margin-bottom: 0.313rem;
    }

    select {
      color: var(--color-grey-1);

      &:focus {
        color: var(--color-grey-0);
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 2.406rem;

      font-size: 0.802rem;
      font-weight: 500;

      color: var(--color-grey-0);
      background-color: var(--color-primary);

      border-radius: 4px;

      transition: 0.5s;

      &:hover {
        background-color: var(--color-primary-focus);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 23.063rem;
    height: auto;

    form {
      label {
        font-size: 0.761rem;
      }

      input,
      select {
        height: 3rem;
        font-size: 1.015rem;
      }
      span {
        font-size: 0.75rem;
      }

      button {
        height: 3rem;
        font-size: 1rem;
      }
    }
  }
`;

const DivClose = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 3.125rem;

  background-color: var(--color-grey-2);

  h2 {
    font-size: 0.702rem;
    color: var(--color-grey-0);
    margin-left: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 0.875rem;
    }
  }
`;

const CloseModal = styled.button`
  position: absolute;
  top: -12px;
  right: 0;
  margin: 1.25rem 1.25rem 0rem 0rem;
  font-size: 1.75rem;
  background-color: var(--color-grey-2);
  color: var(--color-white);
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s;

  svg {
    color: var(--color-grey-1);

    &:hover {
      color: var(--color-negative);
    }
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 60%;
  }

  button + button {
    width: 30%;
    background-color: var(--color-grey-1);

    &:hover {
      background-color: var(--color-negative);
    }
  }
`;

export {
  ContainerModal,
  Container,
  ModalForm,
  DivClose,
  CloseModal,
  ContainerButtons,
};
