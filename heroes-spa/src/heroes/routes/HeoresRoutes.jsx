import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar"
import { DcPage } from "../pages/DcPage";
import { MarvelPage } from "../pages/MarvelPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroePage } from "../pages/HeroePage";

export const childrenHeoresRoutes = [
    {
        path: "marvel",
        element:<MarvelPage />,
    },
    {
        path: "dc",
        element:<DcPage />,
    },
    {
        path: "search",
        element:<SearchPage />,
    },
    {
        path: "hero/:id",
        element:<HeroePage />,
    },
    {
        path: "/*",
        element:<Navigate to={'/marvel'} />,
    },
];

export const HeoresRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}
