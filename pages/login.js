import { withRouter } from 'next/router';
import Layout from '../components/Layout';

const Login = withRouter(props => {
  const { router, url } = props;

  return (
    <Layout>
      <p>
        <strong>{router.query.title}</strong>
      </p>
      <style jsx>{`
      p {
        strong {
          color: orange;
        }
      }
      `}</style>
    </Layout>
  )
});

export default Login;