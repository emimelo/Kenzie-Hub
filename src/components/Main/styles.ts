import styled from "styled-components";

const CreateTech = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1.25rem 0rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.031rem;
    height: 2rem;

    font-size: 1rem;
    font-weight: 700;

    color: var(--color-white);
    background-color: var(--color-grey-3);
    border-radius: 4px;

    transition: 0.5s;

    &:hover {
      background-color: var(--color-grey-2);
    }

    svg {
      width: 100%;
      height: 70%;

      font-weight: 700;
    }
  }
`;

const DivNoTech = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  height: 50vh;

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export { CreateTech, DivNoTech };
