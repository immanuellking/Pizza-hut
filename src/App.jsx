import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Menu, { loader as menuLoader } from "./pages/Menu";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

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
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
            // action: checkoutAction,
          },
          {
            path: "/order/:orderId",
            element: <Order />,
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
