import React from 'react';
import { Container, ContainerText, TextSubTitle, TextTitle } from './styles';
import Image from 'next/image';

export default function CardFooter({ title, subtitle, image, number }) {
  return (
    <Container>
      <Image src={image} width={70} height={100} alt='oi' />
      <ContainerText>
        <div>{number}</div>
        <TextTitle>{title}</TextTitle>
        <TextSubTitle>{subtitle}</TextSubTitle>
      </ContainerText>
    </Container>
  );
}
