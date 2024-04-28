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
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage></ErrorPage>,
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
      loader:({params})=>fetch(`https://safias-creative-art-server-bmbwsw0zg-mohaiminul375s-projects.vercel.app/Art&Crafts/${params.id}`)
      },
      {
        path:'/category/:categoryName',
        element:<CategoryData></CategoryData>,
        loader:({params})=>fetch(`https://safias-creative-art-server-bmbwsw0zg-mohaiminul375s-projects.vercel.app/AllArt&Crafts/${params.categoryName}`)
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
