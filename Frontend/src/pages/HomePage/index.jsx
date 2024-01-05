import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Photo from '../../assets/ef1b7b898f8d650f0ecdcb6ad5b9baea.png';
import Photo2 from '../../assets/f77ca20b70b8ec4625f929fb85e567f4.png';

import { Box, Container, Grid, ImageListItem, Stack, Typography } from '@mui/material';

import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';

import { fetchData } from '../../firebase/firebase-utils';

import DefaultCard from '../../components/Card';
import Carousel from '../../components/Carousel';
import EntranceAnimation from '../../components/EntranceAnimation';
import LangCard from '../../components/LangCard';
import { typesCards } from '../../components/LangCard/data';
import SplashAnimation from '../../components/SplashAnimation';
import css from './style.module.css';

const HomePage = () => {
  const { data: cards, isLoading } = useQuery('projects', () => fetchData('projects'));

  const navigate = useNavigate();

  React.useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <EntranceAnimation>
      <Container>
        <Grid
          container
          height={'100%'}
          gridTemplateColumns={'5fr 1fr'}
          alignContent={'flex-end'}
          py={3}
          spacing={{ xs: 0, lg: 2 }}
          alignItems={'center'}
        >
          <Grid item xs={12} md={6} lg={6}>
            <ImageListItem sx={{ width: { md: '80%', lg: '95%' }, display: 'flex', justifyContent: 'center' }}>
              <img src={Photo} className={css['photo']} alt="programmers" loading="lazy"></img>
            </ImageListItem>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Stack
              paddingLeft={{ xs: 0, lg: 5 }}
              alignItems={{ xs: 'center', lg: 'flex-end' }}
              paddingBottom={{ xs: 10 }}
            >
              <Typography
                fontSize={{ xs: '3rem', md: '5rem', lg: '6rem' }}
                fontWeight={900}
                textAlign={{ xs: 'center', md: 'end' }}
              >
                מועדון <span className={css['text-yellow']}>מפתח</span>ים/ות
              </Typography>
              <Typography textAlign={{ xs: 'center', md: 'end' }} fontSize={{ xs: '1rem', md: '1.1rem', lg: '1.2rem' }}>
                ללמוד לפתח זה דבר אחד - לממש את הלמידה זה משהו אחר לגמרי. כדי לפתח טוב, צריך להתאמץ ולא להפסיק לכתוב
                ולהכיר את הטכנולוגיות הכי חדישות ומתקדמות בשוק. זה מה שאנחנו שואפים אליו במועדון הפיתוח של המכללה
                למינהל. אנחנו לוקחים את הידע שלנו, ומנסים לדחוף אותו שלב אחד קדימה ולממש אותו.
              </Typography>
              <SplashAnimation>
                <Button variant="contained" onClick={() => navigate('/Signup')}>
                  להרשמה לחצו כאן
                </Button>
              </SplashAnimation>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Grid container gap={{ xs: 2, md: 4 }} justifyContent={'center'}>
              {typesCards.map((card) => {
                return (
                  <Grid item xs={12} md={3} lg={2}>
                    <LangCard {...card} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          fontSize: '1.25rem',
          direction: 'rtl',
          padding: { xs: '1rem 2rem', md: '6rem 8rem' },
          background: 'linear-gradient(306deg, rgba(246, 201, 39, 1), rgb(180, 142, 5))',
        }}
      >
        <SplashAnimation>
          <Grid container>
            <Grid item xs={12} md={4}>
              <ImageListItem>
                <img src={Photo2} alt="" />
              </ImageListItem>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h1" color="secondary" fontWeight={900}>
                    1.
                  </Typography>
                  <Typography variant="h5" color={'secondary'} fontWeight={900}>
                    אנו ניקח את הכלים שאנחנו לומדים בתואר וניצור איתם פרויקטים אמיתיים - אותם ניתן להוסיף לתיק העבודות
                    שלנו.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h1" color="secondary" fontWeight={900}>
                    2.
                  </Typography>
                  <Typography variant="h5" color={'secondary'} fontWeight={900}>
                    במהלך השנה נעבוד בצוותים המדמים צוותי פיתוח בתעשייה, נלמד איך ללמוד טכנולוגיות חדשות במהירות
                    וביעילות ואיך להשתלב בצוותי פיתוח חדשים.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h1" color="secondary" fontWeight={900}>
                    3.
                  </Typography>
                  <Typography variant="h5" color={'secondary'} fontWeight={900}>
                    סטודנט אשר נמצא במועדון הפיתוח, ילמד כיצד להשתמש בטכנולוגיות החדשות והפופולאריות ביותר שיש בשוק.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h1" color="secondary" fontWeight={900}>
                    4.
                  </Typography>
                  <Typography variant="h5" color={'secondary'} fontWeight={900}>
                    הוא יקבל כלים שלא היה יכול לקבל בשום מקום אחר. הוא יבנה פרויקטים אמיתיים עם מנטור צמוד שיעזור לו בכל
                    שלב בדרך. הוא יעבור מסטודנט - למתכנת.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SplashAnimation>
      </Box>
      <SplashAnimation>
        <Stack
          alignItems={'center'}
          sx={{
            background: '#040413',
            borderTop: '1px solid #1F1F53',
            borderBottom: '1px solid #1F1F53',
            padding: { xs: '1rem 2rem', md: '6rem 8rem' },
          }}
        >
          <Typography variant="h2" sx={{ direction: 'rtl', marginBottom: '3rem' }} fontWeight={900}>
            איך מתקבלים?
          </Typography>
          <Typography variant="h4" sx={{ direction: 'rtl', marginBottom: '2rem' }} textAlign={'center'}>
            המועדון הוא מועדון אקסקלוסיבי - יש לנו מספר מוגבל של מקומות. <br />
            כדי להצטרף למועדון צריך לעבור מיונים מקיפים.
            <br />
            בסופו של יום, אנחנו רוצים שסטודנטים שיהיו אצלנו, <br />
            יצאו לשוק העבודה עם תיק עבודות מרשים, <br />
            וכמובן, שהם יצאו מתכנתי על, ולא פחות מזה!
          </Typography>
          <Button variant="contained" onClick={() => navigate('/Signup')}>
            Getting Started
          </Button>
        </Stack>
      </SplashAnimation>
      <Container maxWidth="xl">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '2rem',
            marginBottom: '4rem',
            padding: { xs: '1rem 2rem', md: '6rem 8rem' },
          }}
        >
          <Typography variant="h2" fontWeight={900} textAlign={'center'} marginBottom={5}>
            ה<span className={css['text-yellow']}>פרוייקט</span>ים שלנו
          </Typography>
          <Loader isLoading={isLoading}>
            {cards && (
              <Carousel
                settings={{
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  infinite: true,
                  responsive: [
                    {
                      breakpoint: 500,
                      settings: { slidesToScroll: 1, slidesToShow: 1 },
                    },
                  ],
                }}
              >
                {cards.map((card) => {
                  return (
                    <div className={css['slide']}>
                      <DefaultCard {...card} />
                    </div>
                  );
                })}
              </Carousel>
            )}
          </Loader>
        </div>
      </Container>
    </EntranceAnimation>
  );
};

export default HomePage;
