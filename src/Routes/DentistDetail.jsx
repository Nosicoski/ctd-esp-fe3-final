import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DentistDetail from './components/DentistDetail';
import Home from './components/Home'; // Tu página de inicio o principal
import '../Styles/DentistDetail.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Ruta para el detalle del dentista */}
        <Route path="/dentist/:id" element={<DentistDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
