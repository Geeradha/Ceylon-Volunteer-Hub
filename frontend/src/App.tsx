import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import VolunteerPrograms from './pages/VolunteerPrograms';
import Destinations from './pages/Destinations';
import VolunteerLife from './pages/VolunteerLife';
import ApplyNow from './pages/ApplyNow';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/programs" element={<VolunteerPrograms />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/volunteer-life" element={<VolunteerLife />} />
            <Route path="/apply" element={<ApplyNow />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
