import React from 'react';
import { Container, ContentBox } from './styles';
import { Divider } from '@mui/material';

export default function RightBody() {
  return (
    <Container>
      <h1>NEWS</h1>
      <ContentBox>
        <h1>Hydrogen VS Eletric Cars</h1>
        <h2>Will hydrogen-fueled cars ever catch up to EVs ?</h2>
      </ContentBox>
      <Divider />
      <ContentBox>
        <h1>The Downsides of AI Artistry</h1>
        <h2>
          What are the possible adverse effects of on-demand Al image
          generation?
        </h2>
      </ContentBox>
      <ContentBox>
        <h1>Is VC Funding Drying Up?</h1>
        <h2>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </h2>
      </ContentBox>
    </Container>
  );
}
