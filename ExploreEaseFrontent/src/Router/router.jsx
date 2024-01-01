import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Tour from '../pages/Tour/Tour';
import TopDestination from '../pages/TopDestination/TopDestination';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <h1>Error Page</h1>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/tour',
                element: <Tour />
            },
            {
                path: '/top-destination',
                element: <TopDestination />
            },
        ]
    }
])

export default router