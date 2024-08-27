import { Outlet } from '@remix-run/react';
import { Layout } from './components/';

export default () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
