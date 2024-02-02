/* eslint-disable react/no-array-index-key */
import { Todo } from '../types';
import { useFetchTodos } from '../hooks/customHooks';
import TodoComponent from './TodoComponent';

export default function TodosComponent() {
  const { isPending, error, data: todos } = useFetchTodos();

  return (
    <>
      {isPending && <p>Loading ...</p>}
      {error && <p>Error ....</p>}
      {todos &&
        todos.map((todo: Todo, id) => <TodoComponent todo={todo} key={id} />)}
    </>
  );
}
