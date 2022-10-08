import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;

  padding: 1.103rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  h2 {
    color: var(--color-grey-0);

    font-size: 0.903rem;
    align-self: center;

    margin: 0.625rem 0rem;
  }

  label {
    color: var(--color-grey-0);

    font-size: 0.611rem;
    font-weight: 400;
  }

  input {
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
    font-size: 0.602rem;

    margin-bottom: 0.615rem;
  }

  button {
    height: 2.406rem;

    font-size: 0.802rem;
    font-weight: 500;

    border-radius: 4.06px;

    background-color: var(--color-primary);
    color: var(--color-white);

    transition: 0.5s;

    &:hover {
      background-color: var(--color-primary-focus);
    }
  }

  p {
    font-size: 0.602rem;
    font-weight: 600;

    align-self: center;

    color: var(--color-grey-1);

    margin: 1.25rem 0rem 0.375rem 0rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2.406rem;
    font-size: 0.802rem;
    font-weight: 500;

    color: var(--color-grey-0);
    background-color: var(--color-grey-2);

    border-radius: 4px;

    transition: 0.5s;

    &:hover {
      background-color: var(--color-grey-1);
    }
  }
  @media screen and (min-width: 426px) {
    h2 {
      font-size: 1.125rem;
    }

    label {
      font-size: 0.761rem;
    }

    input {
      font-size: 1.015rem;
      height: 3rem;
    }

    span {
      font-size: 0.75rem;
    }

    button {
      font-size: 1rem;
      height: 3rem;
    }

    p {
      font-size: 0.75rem;
    }

    a {
      font-size: 1rem;
      height: 3rem;
    }
  }
`;

export { Form };
