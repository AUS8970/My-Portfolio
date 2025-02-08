import React from 'react';
import App from "./App"
import { createBrowserRouter } from "react-router-dom";
import MainRoute from './components/MainRoute';
import ProjectDetails from "./components/ProjectDetails"

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
        // loader: ({params}) => fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/${params.id}`)
      }
    ]
  },
]);

export default route;