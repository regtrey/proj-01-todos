import { createContext, useContext, useState } from 'react';

const TodosContext = createContext();

const initialTodos = [
  { id: 1, message: 'The greatest glory in living lies not in never falling.' },
  { id: 2, message: 'The only thing we have to fear is fear itself.' },
  { id: 3, message: 'Do one thing every day that scares you.' },
];

function TodosProvider({ children }) {
  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState('');

  return (
    <TodosContext.Provider value={{ todos, setTodos, todoInput, setTodoInput }}>
      {children}
    </TodosContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodosContext);
  if (context === undefined) {
    return new Error('TodosContext was used outside of TodosProvider');
  }
  return context;
}

export { TodosProvider, useTodos };
