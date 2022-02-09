import React from 'react';

import { Container, Filter, FilterName, Close } from './styles';

const Filters: React.FC = () => {
  return (
    <Container>
      <p>FILTRE POR:</p>
      <Filter>
        <FilterName>
          Família
          <Close />
        </FilterName>
      </Filter>
    </Container>
  );
};

export default Filters;
