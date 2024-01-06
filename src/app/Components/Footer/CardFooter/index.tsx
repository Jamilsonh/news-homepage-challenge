import React from 'react';
import {
  Container,
  ContainerText,
  TextNumber,
  TextSubTitle,
  TextTitle,
} from './styles';
import Image from 'next/image';

export default function CardFooter({ title, subtitle, image, number }) {
  return (
    <Container>
      <Image src={image} width={130} height={165} alt='oi' />
      <ContainerText>
        <TextNumber>{number}</TextNumber>
        <TextTitle>{title}</TextTitle>
        <TextSubTitle>{subtitle}</TextSubTitle>
      </ContainerText>
    </Container>
  );
}
