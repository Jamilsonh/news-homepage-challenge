import Image from 'next/image';
import { BodyContainer, ContainerMain, ContainerPai } from './styles';
import { Header } from '@/app/Components/Header';
import LeftBody from '@/app/Components/Body/LeftBody';
import RightBody from '@/app/Components/Body/RightBody';
import Footer from '@/app/Components/Footer';
import { MenuMobile } from '@/app/Components/Header/MenuMobile';
import { useState } from 'react';

export function HomePage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <ContainerPai>
        <ContainerMain isVisible={menuIsVisible}>
          <Header setMenuIsVisible={setMenuIsVisible} />
          <BodyContainer>
            <LeftBody />
            <RightBody />
          </BodyContainer>
          <Footer />
        </ContainerMain>
      </ContainerPai>
    </>
  );
}
