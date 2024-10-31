import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CreateMoim from "../../pages/CreateMoim";
import TopicResult from "../../pages/TopicResult";
import TopicDetail from "../../pages/TopicDetail";
import Review from "../../pages/Review";
import Splash from "../../pages/Splash";
import HotTopic from "../../pages/HotTopic";
import RecentMoim from "../../pages/RecentMoim";

export const routes = [
  { path: "/", element: <Splash /> },
  { path: "/home", element: <Home /> },
  { path: "/createmoim", element: <CreateMoim /> },
  { path: "/recentmoim", element: <RecentMoim /> },
  { path: "/topicresult", element: <TopicResult /> },
  { path: "/topicdetail", element: <TopicDetail /> },
  { path: "/hottopic", element: <HotTopic /> },
  { path: "/review", element: <Review /> },
];

const RouteSetting = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default RouteSetting;
