import { Navigate } from "react-router-dom";

import GamePage from "@/pages/game";
import ActivePage from "@/pages/active";
import MePage from "@/pages/me";
import ErrorPage from "@/pages/error";

const router = [
  {
    path: "/game",
    element: <GamePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/active",
    element: <ActivePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/me",
    element: <MePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to="/game" replace />,
  },
];

export default router;
