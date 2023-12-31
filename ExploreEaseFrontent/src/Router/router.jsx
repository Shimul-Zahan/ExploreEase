import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import TopDestination from '../pages/TopDestination/TopDestination';
import DestinationDetails from '../pages/TopDestination/DestinationDetails/DestinationDetails';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import MountainHome from '../pages/MountainHome/MountainHome';
import HolidayHome from '../pages/HolidayHome/HolidayHome';
import CampaignHome from '../pages/CampaignHome/CampaignHome';

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
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/top-destination',
                element: <TopDestination />
            },
            {
                path: '/tour-details',
                element: <DestinationDetails />
            },
            {
                path: '/mountain-home',
                element: <MountainHome />
            },
            {
                path: '/holiday-home',
                element: <HolidayHome />
            },
            {
                path: '/campaign-home',
                element: <CampaignHome />
            },
        ]
    }
])

export default router