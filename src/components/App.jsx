import React from 'react';

import useGetData from '@hooks/useGetData';
import Card from './Card';

import '@styles/components/App.scss';

const App = () => {
  const info = useGetData();

  return (
    <main>
      {info.loading && <p>Loading...</p>}
      {info.error && <p>{info.error}</p>}
      {!info.loading && !info.error && <Card data={info.data} />}
    </main>
  );
};

export default App;
