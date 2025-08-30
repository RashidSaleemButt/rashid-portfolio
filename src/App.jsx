import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import SocialMedia from './pages/SocialMedia';
import ContactMe from './pages/ContactMe';
import './App.css'; // Keep this if you want to style your app

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/">Home</Link> | 
        <Link to="/about">About Me</Link> | 
        <Link to="/social">Social Media</Link> | 
        <Link to="/contact">Contact Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/social" element={<SocialMedia />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
