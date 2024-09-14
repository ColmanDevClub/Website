import { Card, Container, Grid, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import Animation from 'src/components/EntranceAnimation';
import { YouTubeVideo } from 'src/components/YouTubeVideo';
import useGoogleSheetsData from 'src/hooks/useSheets';
import Loader from 'src/components/common/Loader';
import { ArrowButton } from 'src/ui';

const StyledBox = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const strip = (str) => {
  return str?.replace(/^\s+|\s+$|"|'/g, '');
};

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
    return {
      id: strip(row[csvMap.id]),
      subject: strip(row[csvMap.subject]),
      presentation: strip(row[csvMap.presentation]),
      youtube: strip(row[csvMap.youtube])?.split('v=')[1]?.split('&')[0],
      git: strip(row[csvMap.git]),
      exercise: strip(row[csvMap.exercise]),
      time: strip(row[csvMap.time]),
    };
  });

  return (
    <Container>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        spacing={{ xs: 2, md: 3 }}
        px={{ xs: 0, md: 5 }}
        py={2}
      >
        {csvData.map((lesson, index) => {
          return (
            <Grid item justifyContent={'center'} key={lesson.id}>
              <Animation animationDelay={index * 0.2}>
                <StyledBox
                  key={index}
                  sx={{
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: '0px 0px 3px 0px #F6C927',
                      transform: 'scale(1.03)',
                    },
                  }}
                >
                  <Typography p={2} fontWeight={900} variant="h4">
                    Week {index + 1}
                  </Typography>
                  <YouTubeVideo videoId={lesson.youtube} />
                  <Stack p={2}>
                    <h2>{lesson.subject}</h2>
                    <ArrowButton href={lesson.git} target="_blank">
                      <Typography fontWeight={900} variant="body1">
                        Start Challenge
                      </Typography>
                    </ArrowButton>
                  </Stack>
                </StyledBox>
              </Animation>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SyllabusPage;
