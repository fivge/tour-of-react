import { createBrowserRouter } from "react-router-dom";

import Home from "./home/App";
import Square from "./square/index";
import MUi from "./mui/index";
import RxJS from "./rxjs/index";
import Zustand from "./zustand/index";
import Zustand2 from "./zustand2/index";

import Root, { loader as rootLoader, action as rootAction } from "./contact/root";
import Contact, { loader as contactLoader } from "./contact";
import EditContact, { action as editAction } from "./contact/edit";
import ErrorPage from "./error-page";

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
  {
    path: "zustand",
    element: <Zustand />,
  },
  {
    path: "zustand2",
    element: <Zustand2 />,
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

export default router;
