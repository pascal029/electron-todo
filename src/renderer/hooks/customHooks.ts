/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { Todo } from '../types';

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ['getTodos'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/todos', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer asdfklsjkfjkl',
        },
      });
      const data = await response.json();
      return data as Todo[];
    },
  });
};

export const useFetchTodoById = (id: number) => {
  return useQuery({
    queryKey: ['getTodoById'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer asdfklsjkfjkl',
        },
      });
      const data = await response.json();
      return data as Todo;
    },
  });
};
