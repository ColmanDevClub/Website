import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Loader from '../../../../ui/Loader';
import useGoogleSheetsData from '../../../../hooks/useSheets';
import { SyllabusCard } from './SyllabusCard';


const strip = (str) => {
  return str?.replace(/^\s+|\s+$|"|'/g, '');
};

const getVideoId = (youtubeUrl) => {
  return youtubeUrl?.split('v=')[1]?.split('&')[0]
}

const csvMap = {
  id: 0,
  subject: 1,
  presentation: 2,
  youtube: 3,
  links: 4,
  git: 5,
  exercise: 6,
  time: 7,
  show: 8,
};

const SyllabusPage = () => {
  const { data, isLoading, error } = useGoogleSheetsData();

  if (error) {
    console.log(error);
    return (
      <Container>
        <Typography variant="h2">Error</Typography>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Loader isLoading={isLoading}></Loader>
      </Container>
    );
  }

  const splicedData = data.slice(1, data.length);
  const visibleData = splicedData?.filter((row) => strip(row[csvMap.show]) === 'TRUE');
  const csvData = visibleData?.map((row) => {

    const rawData = strip(row[csvMap.youtube]);    
    const videosList = rawData.split(',');
    const videosIds = videosList?.map(videoUrl => getVideoId(videoUrl));
    
    return {
      id: strip(row[csvMap.id]),
      subject: strip(row[csvMap.subject]),
      presentation: strip(row[csvMap.presentation]),
      youtube: videosIds,
      git: strip(row[csvMap.git]),
      exercise: strip(row[csvMap.exercise]),
      time: strip(row[csvMap.time]),
    };
  });

  return (
    <Container display="flex" flexDirection="column" width="100%">
      <Grid 
        container 
        justifyContent={"center"} 
        alignItems={"center"} 
        rowSpacing={2}  
        columnSpacing={{ xs: 2, sm: 2, md: 4 }} 
        spacing={{ xs: 2, md: 2 }}
        px={{ xs: 1,  sm: 1, md: 5 }}
        py={2}
      >
        {csvData.map((lesson, index) => {
          return (
            <SyllabusCard 
              key={lesson.id}
              youtubeVideoIDs={lesson.youtube} 
              git={lesson.git} 
              subject={lesson.subject} 
              index={index}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default SyllabusPage;
