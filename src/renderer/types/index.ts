export type Todo = {
  todoName: string;
  status: boolean;
  todoDate: string | Date;
  id: number;
};
export type PropsDatePicker = {
  setTodoDate: (e: any) => void;
  todoDate: {
    startDate: null | string;
    endDate: null | string;
  };
};
