import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/login.jsx";
import Cadastro from "../pages/Cadastro/cadastro.jsx";
import Alterar from "../pages/Alterar/alterar.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  },
  {
    path: "/Alterar",
    element: <Alterar />,
  },
]);

export default router;
