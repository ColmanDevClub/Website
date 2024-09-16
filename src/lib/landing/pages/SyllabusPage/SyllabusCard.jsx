import { Box, Card, Grid, Stack, Typography, styled } from "@mui/material";
import { YouTubeVideo } from "src/components/YouTubeVideo";
import { Carousel } from "../../components";
import { ArrowButton } from "src/ui";

const StyledBox = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s',
    '&:hover': {
        boxShadow: '0px 0px 3px 0px #F6C927',
        transform: 'scale(1.03)',
    },
    width: "100%",
}));

const carouselSettings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    style: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: "80%",
    },
  }

export const SyllabusCard = ({ youtubeVideoIDs, git, subject, index }) => {
  return (
    <Grid item xs={12} sm={10} md={6} lg={4} display={"flex"} alignItems={"center"} > 
        <StyledBox  key={index} >
            <Typography p={2} fontWeight={900} variant="h4">
                Week {index + 1}
            </Typography>

            <Carousel settings={carouselSettings}>
                {youtubeVideoIDs.map((videoId, idx) => (
                <Box key={idx} >
                    <YouTubeVideo videoId={videoId} />
                </Box>
                ))}
            </Carousel>
            <Stack p={2} display={"flex"} alignItems={"center"}>
                <h2>{subject}</h2>
                <ArrowButton href={git} target="_blank" >
                    <Typography fontWeight={900} variant="body1">
                        Start Challenge
                    </Typography>
                </ArrowButton>
            </Stack>
        </StyledBox>
    </Grid>
  );
};
