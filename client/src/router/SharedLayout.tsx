import { Outlet } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';

export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
