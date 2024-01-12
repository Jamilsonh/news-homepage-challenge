import styled from 'styled-components';
import css from 'styled-jsx/css';

type ContainerProps = {
  isvisible: any;
};

export const Container = styled.section<ContainerProps>`
  position: absolute;
  width: 80%;
  height: 100vh;
  z-index: 5;
  display: flex;
  background-color: white;
  opacity: 0;
  pointer-events: none;
  right: 0;
  transition: 0.7s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.5s;
  }

  ${({ isvisible }) =>
    isvisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0px);

      > svg {
        transform: rotate(0deg);
      }
    `}
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2rem;
  margin-top: 10rem;
  gap: 25px;
  font-weight: 300;
`;
