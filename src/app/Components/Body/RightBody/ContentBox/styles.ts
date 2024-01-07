import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 140px;
  color: white;
  gap: 15px;
`;

export const TextTitle = styled.h1`
  font-size: 20px;
  margin: 0;

  &:hover {
    color: hsl(35, 77%, 62%);
    cursor: pointer;
  }
`;
export const TextSubTitle = styled.h2`
  font-size: 15px;
  margin: 0;
  font-weight: 300;
  color: hsl(233, 8%, 79%);
`;
