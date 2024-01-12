import { IoClose } from 'react-icons/io5';
import { Container, ContainerMenu } from './styles';
import { useEffect } from 'react';

// Define a type for the component's props
type MenuMobileProps = {
  menuIsVisible: boolean;
  setMenuIsVisible: (isvisible: boolean) => void;
};

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isvisible={menuIsVisible}>
      <IoClose size={60} onClick={() => setMenuIsVisible(false)} />
      <ContainerMenu>
        <h2>Home</h2>
        <h2>New</h2>
        <h2>Popular</h2>
        <h2>Trending</h2>
        <h2>Categories</h2>
      </ContainerMenu>
    </Container>
  );
}
