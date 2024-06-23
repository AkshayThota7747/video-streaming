import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videoData } from "./videoData";

const VideoWrapper = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-3xl">
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
          <button
            onClick={handlePlayClick}
            className="text-white bg-blue-500 p-4 rounded-full hover:bg-blue-700"
          >
            Play
          </button>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full"
        controls
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videoData.find((video) => video.id === parseInt(id));

  if (!video) {
    return <p className="text-white">Video not found</p>;
  }

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <button
        onClick={handleBackClick}
        className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded"
      >
        Back
      </button>
      <VideoWrapper videoUrl={video.videoUrl} />
    </div>
  );
};

export default VideoPlayer;
