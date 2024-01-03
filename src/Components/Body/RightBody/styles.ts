import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 500px;
  background-color: hsl(240, 100%, 5%);
  display: flex;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 180px;
  color: white;
  margin: 0 auto;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 15px;
    font-weight: 300;
  }
`;
