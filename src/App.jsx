import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import About from './pages/About';

// Style bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;