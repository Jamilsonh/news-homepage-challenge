import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: space-between;
`;

export const ContainerImage = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  margin-top: 30px;
`;

export const ContainerLeft = styled.div`
  width: 50%;

  display: flex;
  justify-content: flex-start;

  h1 {
    font-size: 55px;
    margin: 0;
    width: 70%;
  }
`;

export const ContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    line-height: 1.7;
  }
`;

export const ButtonReadMore = styled.button`
  width: 200px;
  padding: 18px 25px;
  text-decoration: none;
  border: none;
  background-color: hsl(240, 100%, 5%);
  color: hsl(36, 100%, 99%);
  letter-spacing: 4px;
`;
