import styled, { css } from 'styled-components';

import { CloseCircle } from '../../styles/Icons';

export const Container = styled.div`
  color: #fff;
  padding: 0 16px;
  > p {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  max-width: 1000px;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;
export const FilterName = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  color: var(--filter-color);
  font-weight: bold;
  background: var(--white);
  border-radius: 4px;
  margin: 6px 12px 6px 0;
  cursor: pointer;

  &:focus {
    background: var(--filter-background);
    color: var(--white);
  }
`;

const IconCss = css`
  display: none;
  width: 18px;
  margin-left: 5px;

  &:focus {
    display: inline;
  }
`;

export const Close = styled(CloseCircle)`
  ${IconCss}
`;
