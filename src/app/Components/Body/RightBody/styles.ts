import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 30%;
  height: 580px;
  background-color: hsl(240, 100%, 5%);
  display: flex;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 25px;
  }
`;

export const ContainerArea = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 95%;
`;

export const Title = styled.h1`
  color: hsl(35, 77%, 62%);
  font-size: 45px;
  margin: 0;
  height: 50px;
  display: flex;
  margin-bottom: -10px;
`;
