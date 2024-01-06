import React from 'react';
import CardFooter from './CardFooter';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <CardFooter
        title='Reviving Retro PCs'
        subtitle='What happens when old PCs are given modern upgrades?'
        number='1'
        image='/img-desktop.jpg'
      />
      <CardFooter
        title='Top 10 Laptops of 2022'
        subtitle='What happens when old PCs are given modern upgrades?'
        number='2'
        image='/img-desktop.jpg'
      />
      <CardFooter
        title='Reviving Retro PCs'
        subtitle='What happens when old PCs are given modern upgrades?'
        number='3'
        image='/img-desktop.jpg'
      />
    </Container>
  );
}
