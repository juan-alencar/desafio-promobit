import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { List } from '../../components/List/List';
import Movie from '../../components/Movie';
import { useTodo } from '../../hooks/useMovie';

import { Container, Section } from './styles';
const Home: React.FC = () => {
  const { movies, getAll } = useTodo();

  useEffect(() => {
    getAll();
  }, [getAll]);
  return (
    <Container>
      <Header />
      <Section>
        <List items={movies} />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </Section>
    </Container>
  );
};

export default Home;
