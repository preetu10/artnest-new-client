import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        }
    ]
  },
]);
export default router;
