import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}
