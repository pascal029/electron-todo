/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import { Todo } from '../types';

type TodoComponentProps = {
  todo: Todo;
};

export default function TodoComponent({ todo }: TodoComponentProps) {
  const [checked, setChecked] = useState(false);

  const checkBoxAction = () => {
    setChecked(!checked);
  };
  return (
    <div className="border-2 rounded-md w-3/5 m-1 flex">
      <div className="form-control py-2">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            className="checkbox checkbox-primary"
            onClick={checkBoxAction}
            onChange={() => {}}
          />
        </label>
      </div>
      <div className="flex flex-col p-3 gap-2">
        <div className="flex ">
          <p className="font-semibold">{todo.todoName}</p>
        </div>
        <div className="flex ">
          <p>{todo.todoStatus}</p>
        </div>
      </div>
    </div>
  );
}
