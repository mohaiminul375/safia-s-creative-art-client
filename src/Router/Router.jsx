import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home/Home";
import AllArtCraft from "../components/pages/AllArtCraft/AllArtCraft";
import AddArtCraft from "../components/pages/AddArtCraft/AddArtCraft";
import MyArtCraft from "../components/pages/MyArtCraft/MyArtCraft";

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
        element: <AddArtCraft></AddArtCraft>,
      },

      {
        path: "/myArt&Craft",
        element: <MyArtCraft></MyArtCraft>,
      },
    ],
  },
]);
