import { createBrowserRouter } from 'react-router'
import HomeLayout from './../layouts/HomeLayout';
import HomePage from '../pages/HomePage';
import ProjectDetails from '../pages/ProjectDetails';

const router =createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/project/:id',
                element: <ProjectDetails/>
            }
        ]
    }
])
export default router