import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./routes/home/App";
import Square from "./routes/square/index";
import MUi from "./routes/mui/index";
import RxJS from "./routes/rxjs/index";

import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "contacts",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "square",
    element: <Square />,
  },
  {
    path: "mui",
    element: <MUi />,
  },
  {
    path: "rxjs",
    element: <RxJS />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
