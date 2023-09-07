import Home from "./Pages/Home";
// import Qrcode from "./components/Qrcode";
import Creator from "./Pages/Creator";
import Scanner from "./Pages/Scanner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/generator",
      element: <Creator />,
    },
    {
      path: "/scanner",
      element: <Scanner />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
