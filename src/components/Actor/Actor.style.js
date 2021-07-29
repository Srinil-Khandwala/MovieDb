import styled from 'styled-components';

export const Wrapper = styled.button`
  background: var(--darkGrey);
  color: var(--white);
  border-radius: 20px;
  text-align: center;
  padding: 5px;
  cursor: pointer;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;
