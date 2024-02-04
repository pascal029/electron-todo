import Datepicker from 'react-tailwindcss-datepicker';
import { PropsDatePicker } from '../types';

export default function DemoComponent({
  setTodoDate,
  todoDate,
}: PropsDatePicker) {
  return (
    <Datepicker
      useRange={false}
      asSingle={true}
      value={todoDate}
      onChange={(newValue) => setTodoDate(newValue)}
      primaryColor={'teal'}
      startFrom={new Date()}
    />
  );
}
