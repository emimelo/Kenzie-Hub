import styled from "styled-components";

const List = styled.li`
  width: 85%;
  min-height: 3.046rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 0.761rem;
  margin: 0 auto;
  border-radius: 4px;

  background-color: var(--color-grey-4);

  h2 {
    font-size: 0.888rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.313rem;

    align-items: end;

    span {
      font-size: 0.761rem;
      font-weight: 400;

      color: var(--color-grey-1);
    }

    button {
      display: flex;
      align-items: flex-end;

      color: var(--color-white);
      opacity: 80%;
      background-color: transparent;

      transition: 0.5s;

      &:hover {
        color: var(--color-negative);
      }
    }
  }

  @media screen and (min-width: 426px) {
    div {
      flex-direction: inherit;
      gap: 1.563rem;

      align-items: center;
    }
  }

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

export { List };
