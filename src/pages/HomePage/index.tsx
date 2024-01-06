import Image from 'next/image';
import { BodyContainer } from './styles';
import { Header } from '@/Components/Header';
import RightBody from '@/Components/Body/RightBody';
import LeftBody from '@/Components/Body/LeftBody';
import Footer from '@/Components/Footer';

export function HomePage() {
  return (
    <>
      <Header />
      <BodyContainer>
        <LeftBody />
        <RightBody />
      </BodyContainer>
      <Footer />
    </>
  );
}
