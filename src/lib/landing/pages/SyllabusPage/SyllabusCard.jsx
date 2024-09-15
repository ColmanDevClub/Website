import { Box, Card, Grid, Stack, Typography, styled } from "@mui/material";
import { YouTubeVideo } from "src/components/YouTubeVideo";  // Assuming you have this component for embedding YouTube videos
import { Carousel } from "../../components";  // Assuming this is your custom carousel component
import { EntranceAnimation } from "src/animation";
import { ArrowButton } from "src/ui";

const StyledBox = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: "wrap",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: "33vw",
  minWidth: "600px"
}));

export const SyllabusCard = ({ youtubeVideoIDs, git, subject, index }) => {
  const carouselSettings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    style: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%",
    },
   
  }

  return (
    <Grid item justifyContent={'center'} style={{flex: "1 1 30%"}}> 
        <StyledBox key={index}>
            <Typography p={2} fontWeight={900} variant="h4">
                Week {index + 1}
            </Typography>

            <Carousel settings={carouselSettings}>
                {youtubeVideoIDs.map((videoId, idx) => (
                <Box 
                    key={idx} 
                    style= {{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                    <YouTubeVideo videoId={videoId} />
                </Box>
                ))}
            </Carousel>
            <Stack p={2}>
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


// export const SyllabusCard = ({youtubeVideoIDs, git, subject, index}) => {
//     console.log("youtubeVideoIDs", youtubeVideoIDs);
    
//     return (
//         <Grid item justifyContent={'center'}>
//             <EntranceAnimation animationDelay={index * 0.2}>
//                 <StyledBox
//                     key={index}
//                     sx={{
//                     transition: 'all 0.3s',
//                     '&:hover': {
//                         boxShadow: '0px 0px 3px 0px #F6C927',
//                         transform: 'scale(1.03)',
//                     },
//                     }}
//                 >
//                     <Typography p={2} fontWeight={900} variant="h4">  Week {index + 1} </Typography>

//                     {/* <Carousel
//                         settings={{
//                             slidesToScroll: 1,
//                             slidesToShow: 3,
//                             infinite: true,
//                             responsive: [
//                                 {
//                                     breakpoint: 800,
//                                     settings: { slidesToScroll: 1, slidesToShow: 2 },
//                                     },
//                                     {
//                                         breakpoint: 500,
//                                         settings: { slidesToScroll: 1, slidesToShow: 1 },
//                                         },
//                                         ],
//                                         }}
//                                         > */}
//                         {youtubeVideoIDs?.map((videoId) => {
//                             console.log(videoId);
                            
//                             return (
//                                 <div 
//                                 key={videoId} 
//                                 style={{}}
//                                 >
//                                 <YouTubeVideo videoId={videoId} />
//                             </div>
//                         );
//                     })}
//                     {/* </Carousel> */}
                    
//                     <Stack p={2}>
//                         <h2>{subject}</h2>
//                         <ArrowButton href={git} target="_blank" >
//                             <Typography fontWeight={900} variant="body1">
//                                 Start Challenge
//                             </Typography>
//                         </ArrowButton>
//                     </Stack>
//                 </StyledBox>
//             </EntranceAnimation>
//         </Grid>
//     )
// }