import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Landing from './pages/Landing';
import ProtectedRoute from './router/ProtectedRoute';
import SharedLayout from './router/SharedLayout';
import Register from './pages/Register';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          {/* <Route index element={<Home />} /> */}
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}
