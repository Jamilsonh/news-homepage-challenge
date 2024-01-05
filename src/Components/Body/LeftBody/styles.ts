import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: space-between;
  border: 1px solid black;
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

export const ContainerLeft = styled.div`
  width: 50%;

  h1 {
    font-size: 55px;
  }
`;

export const ContainerRight = styled.div`
  width: 50%;

  h2 {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const ButtonReadMore = styled.button`
  padding: 10px 25px;
  text-decoration: none;
  border: none;
  background-color: hsl(5, 85%, 63%);
  color: hsl(36, 100%, 99%);
  letter-spacing: 3px;
`;
