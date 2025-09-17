import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MoviePage from "./pages/players/page.jsx";
import Players from "./pages/Players.jsx";
// import Favorites from "./pages/Favorites.jsx";

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
        path: "about",
        element: <About />,
      },
      // {
      //   path: "favorites",
      //   element: <Favorites />,
      // },
      {
        path: "players",
        element: <Players />,
      },
      {
        path: "players/:id",
        element: <MoviePage />,
      },
      {
        path: "countries",
        element: <Contact />,
      },
      {
        path: "countries/:id",
        element: <MoviePage />,
      },
      {
        path: "clubs",
        element: <Contact />,
      },
      {
        path: "clubs/:id",
        element: <MoviePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
