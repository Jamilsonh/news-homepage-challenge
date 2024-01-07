import React from 'react';
import {
  Container,
  ContainerImage,
  ContainerText,
  TextNumber,
  TextSubTitle,
  TextTitle,
} from './styles';
import Image from 'next/image';

export default function CardFooter({ title, subtitle, image, number }) {
  return (
    <Container>
      <ContainerImage>
        <Image
          src={image}
          width={130}
          height={165}
          alt='Picture of the author'
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </ContainerImage>
      <ContainerText>
        <TextNumber>{number}</TextNumber>
        <TextTitle>{title}</TextTitle>
        <TextSubTitle>{subtitle}</TextSubTitle>
      </ContainerText>
    </Container>
  );
}
