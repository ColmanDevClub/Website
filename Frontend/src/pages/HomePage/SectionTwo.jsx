import { Box, Grid, ImageListItem, Typography, styled } from '@mui/material';
import React from 'react';
import Photo from '../../assets/f77ca20b70b8ec4625f929fb85e567f4.png';
import EntranceAnimation from '../../components/EntranceAnimation';

export const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 10),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 4),
  },

  [theme.breakpoints.up('xl')]: {
    padding: theme.spacing(4, 20),
  },
}));

const SectionTwo = () => {
  return (
    <SectionContainer
      sx={{ background: 'linear-gradient(306deg, rgba(246, 201, 39, 1), rgb(180, 142, 5))', direction: 'rtl' }}
    >
      <Grid container alignItems={'center'}>
        <Grid item xs={12} md={4}>
          <ImageListItem>
            <img src={Photo} alt="" />
          </ImageListItem>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1" color="secondary" fontWeight={900}>
                1.
              </Typography>
              <Typography variant="h5" color={'secondary'} fontWeight={900}>
                אנו ניקח את הכלים שאנחנו לומדים בתואר וניצור איתם פרויקטים אמיתיים - אותם ניתן להוסיף לתיק העבודות שלנו.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h1" color="secondary" fontWeight={900}>
                2.
              </Typography>
              <Typography variant="h5" color={'secondary'} fontWeight={900}>
                במהלך השנה נעבוד בצוותים המדמים צוותי פיתוח בתעשייה, נלמד איך ללמוד טכנולוגיות חדשות במהירות וביעילות
                ואיך להשתלב בצוותי פיתוח חדשים.
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
                הוא יקבל כלים שלא היה יכול לקבל בשום מקום אחר. הוא יבנה פרויקטים אמיתיים עם מנטור צמוד שיעזור לו בכל שלב
                בדרך. הוא יעבור מסטודנט - למתכנת.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default SectionTwo;
