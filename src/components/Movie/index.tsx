import React from 'react';

import { Container, Poster, Title, Date } from './styles';

const Movie: React.FC = () => {
  return (
    <Container>
      <Poster />
      <Title>Oi, Alberto loucura e doidiça</Title>
      <Date>12 NOV 2021</Date>
    </Container>
  );
};

export default Movie;
