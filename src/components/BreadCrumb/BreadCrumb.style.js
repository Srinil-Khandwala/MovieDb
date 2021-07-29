import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: var(--medGrey);
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: var(--fontMed);
    color: var(--white);

    @media screen and (maxwidth: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
