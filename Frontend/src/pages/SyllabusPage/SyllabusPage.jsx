import {
  Card,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { YouTubeVideo } from "../../components/YouTubeVideo";
import ButtonWrapper from "../../components/common/Button";
import useGoogleSheetsData from "../../hooks/useSheets";
import Loader from "../../components/common/Loader";
import Animation from "../../components/EntranceAnimation";

export const StyledBox = styled(Card)(({ theme }) => ({
  height: "auto",
  width: "290px",
  padding: "0",
}));

const csvMap = {
  id: 0,
  subject: 1,
  presentation: 2,
  youtube: 3,
  git: 4,
  exercise: 5,
  time: 6,
};

const SyllabusPage = () => {
  const { data, isLoading, error } = useGoogleSheetsData();
  console.log("🚀 ~ SyllabusPage ~ data:", data);

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

  const splicedData = data.slice(3, data.length - 2);

  const csvData = splicedData.map((row) => {
    return {
      id: row[csvMap.id],
      subject: row[csvMap.subject],
      presentation: row[csvMap.presentation],
      youtube: row[csvMap.youtube]?.split("v=")[1]?.split("&")[0],
      git: row[csvMap.git],
      exercise: row[csvMap.exercise],
      time: row[csvMap.time],
    };
  });

  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} px={{ xs: 0, md: 5 }} py={2}>
        {csvData.map((lesson, index) => {
          return (
            <Grid item justifyContent={"center"}>
              <Animation animationDelay={index * 0.2}>
                <StyledBox key={index}>
                  <Typography p={2} fontWeight={900} variant="h4">
                    Week {index + 1}
                  </Typography>
                  <YouTubeVideo videoId={lesson.youtube} />
                  <Stack p={2}>
                    <h2>{lesson.subject}</h2>
                    <ButtonWrapper href={lesson.git} target="_blank">
                      <Typography p={2} fontWeight={900} variant="body1">
                        Start Challenge
                      </Typography>
                    </ButtonWrapper>
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
