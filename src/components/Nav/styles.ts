import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 4.5rem;

  margin: 0 auto;

  h1 {
    font-size: 1.25rem;

    color: var(--color-primary);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2rem;
    width: 3.468rem;

    color: var(--color-grey-0);
    background-color: var(--color-grey-3);

    border-radius: 4px;

    font-size: 0.75rem;
    font-weight: 600;

    transition: 0.5s;

    &:hover {
      background-color: var(--color-grey-1);
    }
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export { NavStyle };
