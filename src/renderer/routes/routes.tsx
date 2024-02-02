import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Finance from '../pages/Finance';

const router = createBrowserRouter([
  {
    path: '/index.html',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'finance',
        element: <Finance />,
      },
    ],
  },
]);

export default router;
