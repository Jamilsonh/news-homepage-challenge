import styled from 'styled-components';
import css from 'styled-jsx/css';

export const ContainerMain = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  ${({ isVisible }) =>
    isVisible &&
    css`
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
    border: 1px solid black;
  }
`;

export const ContainerPai = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;
