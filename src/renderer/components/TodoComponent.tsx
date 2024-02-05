/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import { Todo } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeTodoStatus, deleteTodo } from '../ApiCalls/Todos';

type TodoComponentProps = {
  todo: Todo;
};

export default function TodoComponent({ todo }: TodoComponentProps) {
  const queryClient = useQueryClient();
  const [checked, setChecked] = useState(false);

  const { mutateAsync: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTodos'] });
    },
  });
  const { mutateAsync: changeTodoStatusMutation } = useMutation({
    mutationFn: changeTodoStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTodos'] });
    },
  });
  const checkBoxAction = async () => {
    await changeTodoStatusMutation(todo.id);
  };

  const handleDeleteTodo = async () => {
    await deleteTodoMutation(todo.id);
  };
  return (
    <div className="border-2 rounded-md w-3/5 m-1 flex">
      <div className="form-control py-2">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={todo.status}
            className="checkbox checkbox-primary"
            onClick={checkBoxAction}
            onChange={() => {}}
          />
        </label>
      </div>
      <div className="flex flex-col p-3 gap-2 w-full">
        <div className="flex  w-full justify-between">
          <span className={todo.status ? 'line-through' : 'font-bold'}>
            {todo.todoName}
          </span>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="ml-2 p-2 bg-red-500 text-white rounded"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="flex ">
          <p>
            {todo.status
              ? 'Done'
              : new Date(todo.todoDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
          </p>
        </div>
      </div>
    </div>
  );
}
