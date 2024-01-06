import Image from 'next/image';
import { Container, RightMenu } from './styles';

export function Header() {
  return (
    <Container>
      <Image
        src='logo.svg'
        width={65}
        height={40}
        alt='Picture of the author'
      />

      <RightMenu>
        <h2>Home</h2>
        <h2>New</h2>
        <h2>Popular</h2>
        <h2>Trending</h2>
        <h2>Categories</h2>
      </RightMenu>
    </Container>
  );
}
