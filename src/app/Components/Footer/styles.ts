import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
  }
`;
