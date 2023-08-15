import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Recipes from "./pages/Recipes/Recipes"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/recipes",
    element: <Recipes />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)