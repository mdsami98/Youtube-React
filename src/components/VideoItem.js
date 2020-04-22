import React from "react";
import "../css/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="card mt-3">
      <img src={video.snippet.thumbnails.medium.url} className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
