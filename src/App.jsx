import ParallexImg from './components/ParallexImg';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/skills';
import { AnimatePresence } from 'framer-motion';
import Projects from './pages/Projects';
import ScrollToHome from './components/ScrollToHome';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <AnimatePresence>
      <ParallexImg />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
      <ScrollToHome />
    </AnimatePresence>
  );
}

export default App;
