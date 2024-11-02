import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import CreateMoim from '../../pages/CreateMoim';
import TopicResult from '../../pages/TopicResult';
import TopicDetail from '../../pages/TopicDetail';
import Review from '../../pages/Review';
import Splash from '../../pages/Splash';
import Login from '../../pages/Login';

export const routes = [
    { path: '/', element: <Splash /> },
    { path: '/home', element: <Home /> },
    { path: '/createmoim', element: <CreateMoim /> },
    { path: '/topicresult', element: <TopicResult /> },
    { path: '/topicdetail', element: <TopicDetail /> },
    { path: '/review', element: <Review /> },
    { path: '/login', element: <Login /> },
]

const RouteSetting = () => (
    <Routes>
        {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}

    </Routes>
);

export default RouteSetting;