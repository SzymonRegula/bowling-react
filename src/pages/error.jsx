import Layout from '../components/layout/Layout';
import Error from '../components/ui/Error';

function ErrorPage() {
  return (
    <Layout>
      <Error message={'Could not find this page!'} />
    </Layout>
  );
}

export default ErrorPage;
