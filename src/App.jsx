import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SciFiCursor from './components/common/SciFiCursor';
import StarField from './components/common/StarField';
import FloatingParticles from './components/common/FloatingParticles';
import Preloader from './components/common/Preloader';
import AppRouter from './router';
import { useLenisScroll } from './hooks/useLenisScroll';
import { useState, useEffect } from 'react';
import './styles/globals.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize smooth scrolling
  useLenisScroll();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App relative">
        <SciFiCursor />
        <StarField />
        <FloatingParticles />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <main>
                <AppRouter />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
