import Image from 'next/image';
import { CloseButton, Container, MobileMenuButton, RightMenu } from './styles';
import { useState } from 'react';
import { IoReorderThreeSharp } from 'react-icons/io5';

export function Header({ setMenuIsVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <Image
        src='logo.svg'
        width={65}
        height={40}
        alt='Picture of the author'
      />
      <IoReorderThreeSharp onClick={() => setMenuIsVisible(true)} size={60} />

      <RightMenu className={isMenuOpen ? 'menu-open' : ''}>
        <CloseButton onClick={closeMenu}>Close</CloseButton>
        <h2>Home</h2>
        <h2>New</h2>
        <h2>Popular</h2>
        <h2>Trending</h2>
        <h2>Categories</h2>
      </RightMenu>
    </Container>
  );
}
