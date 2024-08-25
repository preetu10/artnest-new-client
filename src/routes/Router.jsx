import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../ErrorPage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        }
    ]
  },
]);
export default router;
