import React from 'react';
import { Container, TextSubTitle, TextTitle } from './styles';

export default function ContentBox({ title, subtitle }) {
  return (
    <Container>
      <TextTitle>{title}</TextTitle>
      <TextSubTitle>{subtitle}</TextSubTitle>
    </Container>
  );
}
