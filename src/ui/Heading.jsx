import styled from 'styled-components';

const StyledHeading = styled.h1`
  width: 100rem;
  color: var(--color-brand-500);
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: -2.5px;

  @media (max-width: 768px) {
    width: 80vw;
    font-size: 7rem;
  }
`;

function Heading() {
  return <StyledHeading>todos</StyledHeading>;
}

export default Heading;
