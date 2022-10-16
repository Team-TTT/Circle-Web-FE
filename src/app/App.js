import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeLayOut from "../common/layout/HomeLayOut";
import ConsoleLayOut from "../common/layout/ConsoleLayOut";
import ErrorPage from "../common/pages/ErrorPage";
import HomePage from "../common/pages/HomePage";
import NotFoundPage from "../common/pages/NotFoundPage";
import ProjectsPage from "../common/pages/ProjectsPage";
import ProjectDetailPage from "../common/pages/ProjectDetailPage";
import ChannelsPage from "../common/pages/ChannelsPage";
import ChannelDetailPage from "../common/pages/ChannelDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayOut />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ConsoleLayOut />}>
          <Route index element={<ProjectsPage />} />

          <Route path=":projectId">
            <Route index element={<ProjectDetailPage />} />

            <Route path="channels">
              <Route index element={<ChannelsPage />} />
              <Route path=":channelId" element={<ChannelDetailPage />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
