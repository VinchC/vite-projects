import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Player from "./pages/Player.jsx";
import Club from "./pages/Club";
import Country from "./pages/Country";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import PlayerPage from "./pages/players/page.jsx";
import ClubPage from "./pages/clubs/page";
import CountryPage from "./pages/countries/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "players",
        element: <Player />,
      },
      {
        path: "players/:id",
        element: <PlayerPage />,
      },
      {
        path: "clubs",
        element: <Club />,
      },
      {
        path: "clubs/:id",
        element: <ClubPage />,
      },
      {
        path: "countries",
        element: <Country />,
      },
      {
        path: "countries/:id",
        element: <CountryPage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
