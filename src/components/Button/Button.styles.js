import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 25%;
  height: 60px;
  min-width: 200px;
  background: var(--darkGrey);
  color: var(--white);
  border: 0;
  border-radius: 30px;
  margin: 20px auto;
  display: block;
  transition: 0.3s all;
  font-size: var(--fontBig);
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
