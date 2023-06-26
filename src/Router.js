import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main';
import KaKaoLogin from './pages/kakaologin';
import SignUp from './pages/signUp';
import NotFound from './pages/ErrorPage/NotFound';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
        errorElement: <NotFound />,
      },
      {
        path: '/kakaologin',
        element: <KaKaoLogin />,
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
