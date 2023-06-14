import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Main from "./pages/main";
import SignUp from "./pages/signUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
