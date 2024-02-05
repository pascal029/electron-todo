/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { NavLink } from 'react-router-dom';

type SidebarProps = {
  setDrawerState: (event: boolean) => void;
};

export default function Sidebar({ setDrawerState }: SidebarProps) {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={() => setDrawerState(false)}
      />
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li>
          <NavLink to="/index.html">Home</NavLink>
        </li>
        <li>
          <NavLink to="/index.html/finance">Finance</NavLink>
        </li>
      </ul>
    </div>
  );
}
