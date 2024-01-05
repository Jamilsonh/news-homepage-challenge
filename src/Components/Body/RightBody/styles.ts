import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 25%;
  height: 550px;
  background-color: hsl(240, 100%, 5%);
  display: flex;
`;

export const ContainerArea = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const Title = styled.h1`
  color: hsl(35, 77%, 62%);
  font-size: 45px;

  margin: 0;
  height: 70px;
  display: flex;
  align-items: flex-end;
  margin-top: 25px;
`;
