import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  color: var(--white);
  margin-bottom: 32px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const LogoBar = styled.div`
  background: var(--header);
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    margin: 19px 0;
    height: 18px;
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 16px;
  }
`;

export const Title = styled.h1`
  padding: 0 16px;
  margin: 40px 0;
  font-size: 24px;
  font-weight: 700;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    text-align: center;
  }
`;
