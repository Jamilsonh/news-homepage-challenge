import Image from 'next/image';
import { BodyContainer } from './styles';
import { Header } from '@/Components/Header';
import RightBody from '@/Components/Body/RightBody';

export function HomePage() {
  return (
    <>
      <Header />
      <BodyContainer>
        <RightBody />
      </BodyContainer>
    </>
  );
}
