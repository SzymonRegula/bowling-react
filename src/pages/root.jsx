import { Outlet } from 'react-router-dom';
import Layout from '../components/layout/Layout';

function RootLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default RootLayout;
