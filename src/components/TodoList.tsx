import React from 'react';
import Todo from './Todo';
import { Todo as TodoType } from '../types';

interface TodoListProps {
  todos: TodoType[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
