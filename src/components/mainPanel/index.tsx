import React from 'react';

import { CardList } from 'components/cardList';
import { CardPane } from 'components/cardPane';

export const MainPanel = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
      }}
    >
      <CardList />
      <CardPane />
    </div>
  );
};
