import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isExpanded }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${video.id}`);
  };

  return (
    <div
      className="bg-black text-white w-94 p-4 rounded-2xl cursor-pointer transition-transform transform hover:scale-105 shadow-3xl"
      onClick={handleClick}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-64 object-cover rounded"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{video.title}</h3>
        {/* Commented out show more functionality */}
        {/* <button
          onClick={onExpand}
          className="mt-2 text-sm text-blue-400"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button> */}
        {/* {isExpanded && (
          <div className="mt-2">
            <p className="text-green-400 text-lg">{video.match}</p>
            <p className="text-lg">{video.rating} • {video.duration} • {video.quality}</p>
            <p className="text-lg">{video.genres.join(' • ')}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default VideoCard;
