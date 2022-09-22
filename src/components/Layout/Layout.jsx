import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Div } from '../Wrappers/Wrappers';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Div>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Div>
  );
};

export default Layout;
