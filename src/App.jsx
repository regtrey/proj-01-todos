import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { TodosProvider } from './context/TodosContext';

import TodosContainer from './features/todo/TodosContainer';
import FormContainer from './features/form/FormContainer';
import Heading from './ui/Heading';

const StyledAppLayout = styled.div`
  height: 100dvh;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding-top: 5rem;
    gap: 3rem;
  }
`;

function App() {
  return (
    <TodosProvider>
      <GlobalStyles />
      <StyledAppLayout>
        <Heading />
        <TodosContainer />
        <FormContainer />
      </StyledAppLayout>
    </TodosProvider>
  );
}

export default App;
