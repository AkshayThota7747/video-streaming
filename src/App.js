import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import { checkAndSetIP } from "./utility";

const App = () => {
  const [ip, setIP] = useState(null);

  useEffect(() => {
    async function fetchIP() {
      const ipAddress = await checkAndSetIP();
      setIP(ipAddress);
    }

    fetchIP();
  }, []);

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
