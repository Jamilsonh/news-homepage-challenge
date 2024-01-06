import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 30%;
  height: 165px;

  justify-content: space-between;
`;

export const ContainerText = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextNumber = styled.h1`
  font-size: 40px;
  margin: 0;
  color: hsl(233, 8%, 79%);
`;

export const TextTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: 800;
`;
export const TextSubTitle = styled.h2`
  font-size: 17px;
  margin: 0;
  font-weight: 800;
  color: hsl(233, 8%, 79%);
  line-height: 1.7;
`;
