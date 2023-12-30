import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Tour from '../pages/Tour/Tour';

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
        ]
    }
])

export default router