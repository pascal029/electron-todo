/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import ModalAddTodo from '../components/ModalAddTodo';
import TodosComponent from '../components/Todos';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const openCloseModal = (): void => {
    const modalAddTodo = document.getElementById('modal-add-todo') as any;
    !openModal ? modalAddTodo?.showModal() : modalAddTodo?.close();
    setOpenModal(!openModal);
  };
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col justify-between">
        <p className="font-bold text-3xl">Todos</p>
        <div className="divider" />
        <div>
          <button
            onClick={openCloseModal}
            type="button"
            className="btn btn-sm btn-success"
          >
            + New Task
          </button>
        </div>
      </div>
      <div className="todos flex flex-col w-full my-10 justify-center items-center ">
        <TodosComponent />
      </div>

      <ModalAddTodo openCloseModal={openCloseModal} />
    </div>
  );
}
