import React from "react";
import { videoData } from "./videoData";
import VideoCard from "./VideoCard";
import AdsterraAd from "./Components/AdsterraAd";

const VideoList = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-900 min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 gap-6 w-full max-w-screen-lg">
        <AdsterraAd />
        {videoData.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isExpanded={true} // Set to always show expanded details
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
