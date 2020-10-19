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

  return (
    <div>
      <Nav
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      ></Nav>
      <Hero></Hero>
      <main className="container">
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
