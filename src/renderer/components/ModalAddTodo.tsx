import React, { useState } from 'react';
import DatePicker from './DatePicker';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function ModalAddTodo() {
  const [todo, setTodo] = useState({
    todoName: '',
  });
  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };
  const closeModal = () => {
    document.getElementById('modal-add-todo')?.close();
  };

  const submitAddTodo = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    // eslint-disable-next-line prefer-destructuring

    e.preventDefault();
    window.electron.ipcRenderer.sendMessage('create-todos', todo);
    window.electron.ipcRenderer.on('success-create-todo', (msg) => {
      console.log(msg);
      closeModal();
    });
  };

  return (
    <div>
      <dialog
        id="modal-add-todo"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
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
            <DatePicker />
            <div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() =>
                  document.getElementById('modal-add-todo')?.close()
                }
                type="button"
                className="btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
