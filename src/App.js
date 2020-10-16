import React, { useEffect } from 'react';
import Nav from './components/Nav';
import './App.css';

function App() {

  useEffect(() => {
    document.title = "Portfolio";
  });

  return (
    <div>
      <h1>Taylor Nyquist</h1>
      <Nav></Nav>
      <main>
        
      </main>
    </div>
  );
}

export default App;
