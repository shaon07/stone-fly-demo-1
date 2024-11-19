import React from 'react';
import logo from './logo.svg';
import './App.css';
import RootLayout from './layout/RootLayout';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Homepage />
      </RootLayout>
    </div>
  );
}

export default App;
