import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: flex;
  height: 100px;

  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
`;

export const RightMenu = styled.div`
  display: flex;
  gap: 35px;

  h2 {
    font-size: 17px;
    font-weight: 400;
    &:hover {
      color: hsl(35, 77%, 62%);
      cursor: pointer;
    }
  }
`;
