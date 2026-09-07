import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Nav from "./components/Nav";

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projeto/:slug", Component: ProjectDetail },
    ],
  },
]);
