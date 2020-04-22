import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  } else {
    const videoSrc = "https://www.youtube.com/embed/" + video.id.videoId;
    return (
      <div className="single-vider-box">
        <div className="single-video">
          <iframe src={videoSrc} />
        </div>
        <div className="single-video-title">
          <h4>{video.snippet.title}</h4>
          <p className="single-video-description">
            {video.snippet.description}
          </p>
        </div>
      </div>
    );
  }
};

export default VideoDetails;
