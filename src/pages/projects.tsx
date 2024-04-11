import { Link, Outlet } from "react-router-dom";

export const Projects = () => (
  <div>
    <h3>Here are all your projects</h3>
    <nav>
      <Link to="/projects/1">Nick 1</Link>
      <Link to="/projects/2">Nick 2</Link>
      <Link to="/projects/3">Nick 3</Link>
    </nav>
    <h1>Current Project is:</h1>
    <Outlet />
  </div>
);
