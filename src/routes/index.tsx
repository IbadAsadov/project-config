import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
];

const router = createBrowserRouter(routes);

export { router };
