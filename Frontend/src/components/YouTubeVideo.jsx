import React from 'react';
import YouTube from 'react-youtube';

export const YouTubeVideo = ({ videoId }) => {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    height: '220',
    width: '290',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} loading="lazy" opts={opts} onReady={onPlayerReady} />;
};
