import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Motivo from './components/Motivo';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/motivo" element={<Motivo />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
