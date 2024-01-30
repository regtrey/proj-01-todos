import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import TodosContainer from './features/todo/TodosContainer';
import Heading from './ui/Heading';

const StyledAppLayout = styled.main`
  height: 100dvh;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 5rem 0 2.5rem;
    gap: 3rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledAppLayout>
        <Heading />
        <TodosContainer />
      </StyledAppLayout>
    </>
  );
}

export default App;
