import { Grid } from '@mui/material';
import { CrcCard } from 'components/card';
import React from 'react';

export const CardPane = () => {
  const cards = Array.from(Object.keys(Array(10))).map((i) => (
    <CrcCard key={i} />
  ));
  return <Grid container>{cards.map((x) => x)}</Grid>;
};
