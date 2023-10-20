import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

{/* <HeroesApp /> */}
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { HeroesApp } from "../HeroesApp";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";



const router = createBrowserRouter([
    {
      path: "/",
      element:<Navigate to={'/marvel'} />,
    },
    {
      path: "marvel",
      element:<MarvelPage />,
    },
    {
      path: "dc",
      element:<DcPage />,
    },
    {
      path: "login",
      element:<LoginPage />,
    },
  ]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
