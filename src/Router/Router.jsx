import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import AllArtCraft from "../components/pages/AllArtCraft/AllArtCraft";
import AddArtCraft from "../components/pages/AddArtCraft/AddArtCraft";
import MyArtCraft from "../components/pages/MyArtCraft/MyArtCraft";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArt&Craft",
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: "/addArt&Craft",
        element:<PrivateRoute> <AddArtCraft></AddArtCraft></PrivateRoute>,
      },

      {
        path: "/myArt&Craft",
        element: <PrivateRoute><MyArtCraft></MyArtCraft></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
]);
