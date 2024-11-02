import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CreateMoim from "../../pages/CreateMoim";
import TopicResult from "../../pages/TopicResult";
import TopicDetail from "../../pages/TopicDetail";
import Review from "../../pages/Review";
import Splash from "../../pages/Splash";
import Login from "../../pages/Login";
import ReviewWrite from "../../components/Review/ReviewWrite";
import HotTopic from "../../pages/HotTopic";
import RecentMoim from "../../pages/RecentMoim";
import PastMoim from "../../pages/PastMoim";

export const routes = [
  { path: "/", element: <Splash /> },
  { path: "/home", element: <Home /> },
  { path: "/createmoim", element: <CreateMoim /> },
  { path: "/topicresult", element: <TopicResult /> },
  { path: "/topicdetail", element: <TopicDetail /> },
  { path: "/review", element: <Review /> },
  { path: "/login", element: <Login /> },
  { path: "/review/write", element: <ReviewWrite /> },
  { path: "/pastmoim/:id", element: <PastMoim /> },
  { path: "/hottopic", element: <HotTopic /> },
  { path: "/recentmoim", element: <RecentMoim /> },
];

const RouteSetting = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default RouteSetting;
