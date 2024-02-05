import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { createTodo } from '../ApiCalls/Todos';
import { Todo } from '../types';
import DatePicker from './DatePicker';

type Props = {
  openCloseModal: () => void;
};

export default function ModalAddTodo({ openCloseModal }: Props) {
  const queryClient = useQueryClient();
  const [todo, setTodo] = useState('');

  const [todoDate, setTodoDate] = useState({
    startDate: null,
    endDate: null,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTodos'] });
    },
  });

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const submitAddTodo = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const newTodo = {
      todoName: todo,
      todoDate: todoDate.startDate,
    } as unknown as Todo;
    await addTodoMutation(newTodo);
    openCloseModal();
  };

  return (
    <div>
      <dialog
        id="modal-add-todo"
        className="modal modal-bottom sm:modal-middle "
      >
        <div className="modal-box ">
          <h3 className="font-bold text-lg">Modal Add Todo</h3>
          <form onSubmit={submitAddTodo} className="flex flex-col gap-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Todo Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={onChangeForm}
                name="todoName"
              />
            </label>
            <div className="w-80">
              <div className="label">
                <span className="label-text">Todo Date</span>
              </div>
              <DatePicker todoDate={todoDate} setTodoDate={setTodoDate} />
            </div>
            <div className="flex w-full gap-3">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <form method="dialog">
                <button onClick={openCloseModal} type="button" className="btn">
                  Close
                </button>
              </form>
            </div>
          </form>
          <div className="modal-action"></div>
        </div>
      </dialog>
    </div>
  );
}
