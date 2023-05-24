import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso', completed: false },
  { text: 'Llorar con la fea', completed: false },
  { text: 'Todo X', completed: true },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
