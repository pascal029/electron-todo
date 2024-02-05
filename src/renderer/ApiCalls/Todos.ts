import axios from 'axios';
import { Todo } from '../types';

export const fetchTodos = async () => {
  const { data } = await axios({
    url: 'http://localhost:3000/todos',
    headers: {
      Authorization: 'Bearer 128fajkls932ikla89',
    },
  });
  return data as Todo[];
};

export const fetchTodoById = async (id: number) => {
  const { data } = await axios({
    url: `http://localhost:3000/todos/${id}`,
    headers: {
      Authorization: 'Bearer 128fajkls932ikla89',
    },
  });
  return data as Todo;
};

export const createTodo = async (todo: Todo) => {
  try {
    const { data } = await axios({
      url: `http://localhost:3000/todos`,
      method: 'POST',
      headers: {
        Authorization: 'Bearer 128fajkls932ikla89',
      },
      data: todo,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const { data } = await axios({
      url: `http://localhost:3000/todos/${id}`,
      method: 'delete',
      headers: {
        Authorization: 'Bearer 128fajkls932ikla89',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeTodoStatus = async (id: number) => {
  try {
    const { data } = await axios({
      url: `http://localhost:3000/todos/${id}`,
      method: 'patch',
      headers: {
        Authorization: 'Bearer 128fajkls932ikla89',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
