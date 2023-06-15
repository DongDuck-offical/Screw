import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import Main from './pages/main';
import SignUp from './pages/signUp';
import NotFound from './pages/ErrorPage/NotFound';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Main />,
        errorElement: <NotFound />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
