import React from 'react';
import CardFooter from './CardFooter';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <CardFooter
        title='Reviving Retro PCs'
        subtitle='What happens when old PCs are given modern upgrades?'
        number='01'
        image='/retro-pcs.jpg'
      />
      <CardFooter
        title='Top 10 Laptops of 2022'
        subtitle='Our best picks for various needs and budgets.'
        number='02'
        image='/top-laptops.jpg'
      />
      <CardFooter
        title='The Growth of Gaming'
        subtitle='How the pandemic has sparked fresh opportunities.'
        number='03'
        image='/gaming-growth.jpg'
      />
    </Container>
  );
}
