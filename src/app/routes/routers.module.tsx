import { createBrowserRouter } from "react-router-dom";

import Home from "./home/App";
import ContactRoot from "./contact/index";
import ContactHome from "./contact/home";
import Contact from "./contact/contact";
import EditContact, { action as editAction } from "./contact/edit";
import ErrorPage from "./error-page";
import Square from "./square/index";
import MUi from "./mui/index";
import RxJS from "./rxjs/index";
import Zustand from "./zustand/index";
import Zustand2 from "./zustand2/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <ContactRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ContactHome /> },
      {
        path: ":contactId",
        element: <Contact />,
      },
      {
        path: ":contactId/edit",
        element: <EditContact />,
        action: editAction,
      },
    ],
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
