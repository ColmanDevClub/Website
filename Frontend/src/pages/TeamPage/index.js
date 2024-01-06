import React from 'react';

import { useQuery } from 'react-query';
import { Container, Typography } from '@mui/material';

import { fetchData } from '../../firebase/firebase-utils';

import css from './style.module.css';
import CardList from '../../components/CardList';
import MemberCard from '../../components/MemberCard';
import Loader from '../../components/common/Loader';

export default function TeamPage() {
  const { data: cards, isLoading } = useQuery('teamMembers', () => fetchData('team'));
  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginY: '1rem',
          fontWeight: 900,
        }}
      >
        <span className={css['text-yellow']}>Our</span>Team
      </Typography>
      <Loader isLoading={isLoading}>
        <CardList cards={cards} CardComponent={MemberCard} />
      </Loader>
    </Container>
  );
}
