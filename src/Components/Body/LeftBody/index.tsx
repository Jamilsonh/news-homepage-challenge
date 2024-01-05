import Image from 'next/image';
import React from 'react';
import {
  ButtonReadMore,
  ContainerBottom,
  ContainerLeft,
  ContainerMain,
  ContainerRight,
} from './styles';

export default function LeftBody() {
  return (
    <ContainerMain>
      <Image src='/img-desktop.jpg' width={949} height={390} alt='oi' />
      <ContainerBottom>
        <ContainerLeft>
          <h1>The Bright Future of Web 3.0?</h1>
        </ContainerLeft>
        <ContainerRight>
          <h2>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. Bu is it
            really fulfilling its promise?
          </h2>
          <ButtonReadMore>READ MORE</ButtonReadMore>
        </ContainerRight>
      </ContainerBottom>
    </ContainerMain>
  );
}
