import styled from 'styled-components';

export const Input = styled.input`
  height: 100%;
  width: 75rem;
  color: var(--color-grey-600);
  border: 1.5px solid var(--color-grey-600);
  border-radius: 12px;
  font-size: 2.5rem;
  padding: 0 3.5rem;

  &::placeholder {
    color: var(--color-grey-600);
  }

  @media (max-width: 768px) {
    height: 5rem;
    width: 100%;
    border-radius: 8px;
    font-size: 2rem;
    padding: 0 1.5rem;
  }
`;
