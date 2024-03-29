import { Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import DefaultCard from '../../components/Card';
import Carousel from '../../components/Carousel';
import Loader from '../../components/common/Loader';
import { fetchData } from '../../firebase/firebase-utils';
import { SectionContainer } from './SectionTwo';
import css from './style.module.css';

const SectionFour = () => {
  const { data: cards, isLoading } = useQuery('projects', () => fetchData('projects'));

  return (
    <SectionContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
                  breakpoint: 800,
                  settings: { slidesToScroll: 1, slidesToShow: 2 },
                },
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
    </SectionContainer>
  );
};

export default SectionFour;
