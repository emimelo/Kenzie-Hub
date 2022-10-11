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
  border-left: 2px solid var(--color-primary);

  transition: 0.5s;

  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-2);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    span {
      color: var(--color-grey-0);
    }
  }

  h2 {
    font-size: 0.888rem;
  }

  div {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    gap: 0.313rem;
    min-height: inherit;

    align-items: end;

    span {
      font-size: 0.761rem;
      font-weight: 400;

      margin: 0 8px 8px 0;

      color: var(--color-grey-1);
    }

    button {
      display: flex;
      align-self: flex-end;

      color: var(--color-negative);
      opacity: 80%;
      background-color: transparent;
      padding: 5px 5px 0 0;

      svg {
        width: 20px;
        height: 20px;

        border-radius: 50%;

        transition: 0.3s;
      }
    }
  }

  @media screen and (min-width: 426px) {
    div {
      flex-direction: inherit;
      gap: 1.563rem;

      align-items: center;

      span {
        margin: 0;
      }

      button {
        align-self: flex-start;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

export { List };
