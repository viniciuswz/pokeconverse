import React from 'react';

import {StatusBar} from 'react-native';

import Dashboard from './src/pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" />
      <Dashboard />
    </>
  );
};

export default App;
