import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import AllArtCraft from "../components/pages/AllArtCraft/AllArtCraft";
import AddArtCraft from "../components/pages/AddArtCraft/AddArtCraft";
import MyArtCraft from "../components/pages/MyArtCraft/MyArtCraft";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CategoryData from "../components/pages/CategoryData/CategoryData";
import ArtCraftDetails from "../components/pages/ArtCraftDetails/ArtCraftDetails";

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
        loader:()=>fetch('http://localhost:5000/allArt&Crafts')
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
      path:'/Art&CraftDetails/:id',
      element:<PrivateRoute><ArtCraftDetails></ArtCraftDetails></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/Art&Crafts/${params.id}`)
      },
      {
        path:'/:category',
        element:<CategoryData></CategoryData>,
        loader:({params})=>fetch(`http://localhost:5000/AllArt&Crafts/${params.category}`)
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
