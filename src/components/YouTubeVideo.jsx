import { Box } from '@mui/material';
import React from 'react';

export const YouTubeVideo = ({ videoId }) => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <iframe 
        id={`ytplayer-${videoId}`} 
        type="text/html" 
        title="YouTube video player"
        width={"100%"}
        height={"100%"}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0" 
        allowfullscreen
        loading='lazy'
      ></iframe>
    </Box>
  );
};
