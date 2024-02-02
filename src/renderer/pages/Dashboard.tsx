/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Dashboard(): React.ReactNode {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <div className="drawer">
      <input
        name="drawer"
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerState}
        onChange={() => {}}
      />
      <div className="drawer-content sm:mx-[5vw] lg:mx-[20vw] relative">
        <div className="mt-[5vh]">
          <label
            onClick={() => setDrawerState(!drawerState)}
            htmlFor="my-drawer"
            className="btn btn-square mb-5 drawer-button"
          >
            Menu
          </label>
          <Outlet />
        </div>
      </div>
      <Sidebar setDrawerState={setDrawerState} />
    </div>
  );
}
