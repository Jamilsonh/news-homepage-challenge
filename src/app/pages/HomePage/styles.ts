import styled from 'styled-components';
import css from 'styled-jsx/css';

type ContainerProps = {
  isvisible: boolean;
};

export const ContainerMain = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  ${({ isvisible }) =>
    isvisible &&
    `
    background-color: rgb(0, 0, 0, 0.5);
  `}
`;

export const BodyContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ContainerPai = styled.div`
  height: 100%;
  overflow: hidden;
`;
