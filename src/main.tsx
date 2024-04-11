import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Projects } from "./pages/projects";
import { ShowProject } from "./pages/show-project";

const Root = () => (
  <>
    <header>
      <h1>Cool Project Guy</h1>
      <nav>
        <Link to="team">Team</Link>
        <Link to="cheese">Cheese</Link>
        <Link to="swag">Swag</Link>
        <Link to="projects">Projects</Link>
      </nav>
    </header>
    <Outlet />
  </>
);

const Team = () => <h2>Team</h2>;
const Cheese = () => <h2>Cheese</h2>;
const Swag = () => <h2>Swag</h2>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "cheese",
        element: <Cheese />,
      },
      {
        path: "swag",
        element: <Swag />,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            path: ":projectId",
            element: <ShowProject />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
