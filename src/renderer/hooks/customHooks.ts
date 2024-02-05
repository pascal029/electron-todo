/* eslint-disable import/prefer-default-export */
import { useQuery } from '@tanstack/react-query';
import { fetchTodoById, fetchTodos } from '../ApiCalls/Todos';

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ['getTodos'],
    queryFn: fetchTodos,
  });
};

export const useFetchTodoById = (id: number) => {
  return useQuery({
    queryKey: ['getTodoById'],
    queryFn: async () => fetchTodoById(id),
  });
};
