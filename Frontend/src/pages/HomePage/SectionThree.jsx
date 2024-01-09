import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { SectionContainer } from './SectionTwo';

const SectionThree = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#040413',
        borderTop: '1px solid #1F1F53',
        borderBottom: '1px solid #1F1F53',
      }}
    >
      <Typography variant="h3" sx={{ direction: 'rtl', marginBottom: '3rem' }} fontWeight={900}>
        איך מתקבלים?
      </Typography>
      <Typography variant="h5" sx={{ direction: 'rtl', marginBottom: '2rem' }} textAlign={'center'}>
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
    </SectionContainer>
  );
};

export default SectionThree;
