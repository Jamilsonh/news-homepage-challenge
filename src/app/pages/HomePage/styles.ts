import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
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
