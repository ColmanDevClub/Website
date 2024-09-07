import React from 'react';

import { Grid } from '@mui/material';

import DefaultCard from '../../lib/landing/components/ProjectCard/ProjectCard';
import DefaultAnimation from '../EntranceAnimation';

const CardList = ({ cards, CardComponent = DefaultCard, AnimationComponent = DefaultAnimation }) => {
  return (
    <Grid container px={{ md: 6, lg: 8, xl: 10 }}>
      {cards.map((card, index) => {
        return (
          <Grid key={card + index} xs={12} md={4} lg={3}>
            <AnimationComponent animationDelay={index * 0.2}>
              <CardComponent {...card} />
            </AnimationComponent>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardList;
