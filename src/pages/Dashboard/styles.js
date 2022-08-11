import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

const Nav = styled.nav`
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
`;

const Header = styled.header`
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
      flex-direction: initial;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 7.375rem;

  margin: 0 auto;

  h2 {
    color: var(--color-grey-0);
  }

  p {
    color: var(--color-grey-0);
  }

  li {
    display: flex;
    flex-direction: column;

    gap: 1.438rem;

    h2 {
      font-size: 1.125rem;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
export { Container, Nav, Header, ContainerMain };
