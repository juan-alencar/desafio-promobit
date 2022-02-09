import React from 'react';
import Filters from '../../components/Filters';
import { Container, LogoBar, Title } from './styles';
import Logo from '../../assets/Vector.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoBar>
        <img src={Logo} alt="" />
      </LogoBar>
      <Title>
        Milhões de filmes, séries e pessoas para descobrir.
        <br />
        Explore já.
      </Title>
      <Filters />
    </Container>
  );
};

export default Header;
