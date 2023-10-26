import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

{/* <HeroesApp /> */}
import { LoginPage } from "../auth/pages/LoginPage";
import { childrenHeoresRoutes, HeoresRoutes } from "../heroes/routes/HeoresRoutes";


const router = createBrowserRouter([
    {
      path: "/login",
      element:<LoginPage />,
    },
    {
      path: "/",
      element:<HeoresRoutes />,
      children: childrenHeoresRoutes
    },
  ]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
