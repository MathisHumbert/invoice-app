import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}
