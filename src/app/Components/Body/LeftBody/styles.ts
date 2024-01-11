import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 67%;
  align-items: space-between;
  height: 580px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 800px;
  }
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    height: 400px;
  }
`;

export const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;

  h1 {
    font-size: 62px;
    margin: 0;
    width: 85%;
    font-weight: 800;
    color: hsl(240, 100%, 5%);
    line-height: 1;

    @media screen and (max-width: 768px) {
      font-size: 55px;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 17px;
    font-weight: 300;
    margin: 0;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 130px;
      font-size: 17px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonReadMore = styled.button`
  width: 200px;
  padding: 17px;
  text-decoration: none;
  border: none;
  background-color: hsl(240, 100%, 5%);
  color: hsl(36, 100%, 99%);
  letter-spacing: 5px;

  &:hover {
    background-color: hsl(5, 85%, 63%);
    cursor: pointer;
  }
`;
