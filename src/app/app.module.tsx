import { RouterProvider } from "react-router-dom";

import HttpProvider from "./core/http.provider";
import router from "./routes/routers.module";

function App() {
  return (
    <HttpProvider>
      <RouterProvider router={router} />
    </HttpProvider>
  );
}

export default App;
