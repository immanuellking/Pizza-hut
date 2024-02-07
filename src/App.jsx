import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Menu, { loader as menuLoader } from "./pages/Menu";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <Menu />,
            loader: menuLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
