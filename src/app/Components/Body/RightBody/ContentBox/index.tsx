import React, { FC } from 'react';
import { Container, TextSubTitle, TextTitle } from './styles';

interface ContentBoxProps {
  title: string;
  subtitle: string;
}

const ContentBox: FC<ContentBoxProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <TextTitle>{title}</TextTitle>
      <TextSubTitle>{subtitle}</TextSubTitle>
    </Container>
  );
};

export default ContentBox;
