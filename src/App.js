import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import { checkAndSetIP } from "./utility";

const App = () => {
  const [userIdentifier, setUserIdentifier] = useState(null);

  useEffect(() => {
    async function fetchUserIdentifier() {
      const uniqueId = await checkAndSetIP();
      setUserIdentifier(uniqueId);
    }

    fetchUserIdentifier();
  }, []);

  const basename =
    process.env.NODE_ENV === "production" ? "/video-streaming" : "/";

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
