import styled from "styled-components";

export const NavBar = styled.div`
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  z-index: 1040;
  position: fixed;
  top: 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), 0px 15px 20px rgba(0, 0, 0, 0.1);

  /* navbar brand style */
  & > a {
    font-family: sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
  }
  & > a:hover {
    cursor: pointer;
    text-decoration: none;
    color: #4169e1;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: space-around;
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 0;
  padding: 0 1rem;
  transition:transform 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    transform: ${(props) =>
      props.openNavBar ? "translate(0)" : "translate(-100%)"};
    overflow: hidden;
    width: 100%;
    background: #ddd;
    z-index: -1;
    height: calc(100vh - 60px);
    position: fixed;
    flex-direction: column;
    justify-content: space-evenly;
    left: 0;
    bottom: 0;
  }
`;

export const NavItem = styled.li`
  display: flex;
  background: #ddd;
  margin-left: 1rem;
  font-weight: bolder;
  font-family: sans-Arial, Helvetica, sans-serif;

  & > a {
    color: #111;
    padding: 0.5rem 1rem;
    transition: color 0.2s ease-in-out;
  }
  &:hover > a {
    color: rgb(0, 123, 255);
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
`;

export const NavIcon = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
