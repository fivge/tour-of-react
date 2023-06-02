import { RouterProvider } from "react-router-dom";

import router from "./routes/routers.module";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
