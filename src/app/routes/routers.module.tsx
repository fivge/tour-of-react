import { createBrowserRouter } from "react-router-dom";

import Home from "./home/App";
import ContactRoot from "./contact/index";
import ContactHome from "./contact/home";
import Contact from "./contact/contact";
import EditContact, { action as editAction } from "./contact/edit";
import ErrorPage from "./error-page";
import ShioriRouting from "./shiori/shiori-routing.module";
import DappRouting from "./dapp/dapp-routing.module";

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
    async lazy() {
      const Component = await import("./square/index");
      return { Component: Component.default };
    },
  },
  {
    path: "mui",
    async lazy() {
      const Component = await import("./mui/index");
      return { Component: Component.default };
    },
  },
  {
    path: "rxjs",
    async lazy() {
      const Component = await import("./rxjs/index");
      return { Component: Component.default };
    },
  },
  {
    path: "zustand",
    async lazy() {
      const Component = await import("./zustand/index");
      return { Component: Component.default };
    },
  },
  {
    path: "zustand2",
    async lazy() {
      const Component = await import("./zustand2/index");
      return { Component: Component.default };
    },
  },
  ShioriRouting,
  DappRouting,
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

export default router;
