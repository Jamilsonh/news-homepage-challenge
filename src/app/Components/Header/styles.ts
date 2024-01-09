import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  height: 100px;

  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
`;

export const RightMenu = styled.div`
  display: flex;
  gap: 35px;

  h2 {
    font-size: 17px;
    font-weight: 400;
    &:hover {
      color: hsl(35, 77%, 62%);
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    display: none; /* Inicialmente oculto em telas menores */
  }

  @media screen and (max-width: 768px) {
    &.menu-open {
      display: block; /* Mostra o menu quando a classe .menu-open é aplicada */
    }
  }
`;

export const MobileMenuButton = styled.button`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
