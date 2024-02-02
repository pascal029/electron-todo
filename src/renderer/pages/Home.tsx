/* eslint-disable jsx-a11y/label-has-associated-control */
import ModalAddTodo from '../components/ModalAddTodo';
import TodosComponent from '../components/Todos';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col justify-between">
        <p className="font-bold text-3xl">Todos</p>
        <div className="divider" />
        <div>
          <button
            onClick={() =>
              document.getElementById('modal-add-todo')?.showModal()
            }
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

      <ModalAddTodo />
    </div>
  );
}
