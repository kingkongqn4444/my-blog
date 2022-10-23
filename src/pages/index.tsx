
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Banner } from '../components/Banner';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export default function Home(): JSX.Element {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
  );
}
