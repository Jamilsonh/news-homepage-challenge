import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 30%;
  height: 140px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const ContainerImage = styled.div`
  width: 30%;
  height: 100%;
`;

export const ContainerText = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  margin: auto;
`;

export const TextNumber = styled.h1`
  font-size: 30px;
  margin: 0;
  color: hsl(233, 8%, 79%);
`;

export const TextTitle = styled.h2`
  font-size: 17px;
  margin: 0;
  font-weight: 900;
  &:hover {
    color: hsl(5, 85%, 63%);
    cursor: pointer;
  }
`;

export const TextSubTitle = styled.h2`
  font-size: 14px;
  margin: 0;
  font-weight: 800;
  color: hsl(233, 8%, 79%);
  line-height: 1.7;
`;
