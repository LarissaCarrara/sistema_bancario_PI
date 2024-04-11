import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './screens/Home';


function App() {
  return (
    <div className="app">
      <div className='main__container'>
        <div className='screens'>
          <Home />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
