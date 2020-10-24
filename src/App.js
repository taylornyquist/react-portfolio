import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {

  const [navSelected, setNavSelected] = useState();
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        navSelected={navSelected}
        setNavSelected={setNavSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <Hero></Hero>
      <main className="container">
        {!contactSelected ? (
          <>
            <About/>
            <Projects/>
          </>
        ) : (
            <Contact/>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
