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

  return <YouTube videoId={videoId} loading="lazy" opts={opts} onReady={onPlayerReady}  />

  // return (
  //   <iframe 
  //     id="ytplayer" 
  //     type="text/html" 
  //     width="290" 
  //     height="220"
  //     src={`https://www.youtube.com/embed/${videoId}`}
  //     frameborder="0" allowfullscreen>
  //   </iframe>
  // )
};
