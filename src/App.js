import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
