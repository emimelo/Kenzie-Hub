import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100vw;

  border-top: solid 1px var(--color-grey-3);
  border-bottom: solid 1px var(--color-grey-3);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 0.938rem;

    width: 80%;
    height: 8.188rem;

    margin: 0 auto;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-grey-0);
  }

  p {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-grey-1);
  }

  @media screen and (min-width: 768px) {
    div {
      width: 60%;

      flex-direction: initial;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export { HeaderStyle };
