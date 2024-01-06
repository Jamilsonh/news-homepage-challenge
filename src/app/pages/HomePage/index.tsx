import Image from 'next/image';
import { BodyContainer, ContainerMain } from './styles';
import { Header } from '@/app/Components/Header';
import LeftBody from '@/app/Components/Body/LeftBody';
import RightBody from '@/app/Components/Body/RightBody';
import Footer from '@/app/Components/Footer';

export function HomePage() {
  return (
    <ContainerMain>
      <Header />
      <BodyContainer>
        <LeftBody />
        <RightBody />
      </BodyContainer>
      <Footer />
    </ContainerMain>
  );
}
