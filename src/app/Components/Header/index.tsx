import Image from 'next/image';
import { CloseButton, Container, MobileMenuButton, RightMenu } from './styles';
import { useState } from 'react';
import { IoReorderThreeSharp } from 'react-icons/io5';

// Define a type for the Header's props
type HeaderProps = {
  setMenuIsVisible: (isvisible: boolean) => void;
};

export function Header({ setMenuIsVisible }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <MobileMenuButton>
        <IoReorderThreeSharp onClick={() => setMenuIsVisible(true)} size={60} />
      </MobileMenuButton>

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
