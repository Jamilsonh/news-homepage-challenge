import React from 'react';
import { ContainerArea, ContainerMain, Title } from './styles';
import { Divider, ThemeProvider, createTheme } from '@mui/material';

import ContentBox from './ContentBox';

export default function RightBody() {
  return (
    <ContainerMain>
      <ContainerArea>
        <Title>New</Title>
        <ContentBox
          title='Hydrogen VS Eletric Cars'
          subtitle='Will hydrogen-fueled cars ever catch up to EVs ?'
        />
        <Divider color='white' />
        <ContentBox
          title='The Downsides of AI Artistry'
          subtitle='What are the possible adverse effects of on-demand AI image generation?'
        />
        <Divider color='white' />
        <ContentBox
          title='Is VC Funding Drying Up?'
          subtitle='Private funding by VC firms is down 50% YOY. We take a look at what that means'
        />
      </ContainerArea>
    </ContainerMain>
  );
}
