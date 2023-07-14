import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Detail from "./pages/Detail/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
