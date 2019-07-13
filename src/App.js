import React from 'react';
import './App.css';
import Rows from './components/rows';

import Weather from './components/images/notebook.png'

const styles = {
  hero: {
    backgroundImage: `url(${ Weather })`
  },

};

function App() {
  return (
    <div style={styles.hero}>
      <Rows   />
    </div>
  );
}

export default App;
