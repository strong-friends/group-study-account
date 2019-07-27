import { withRouter } from 'next/router';
import Layout from '../components/Layout';

const Login = withRouter(props => {
  const { router, url } = props;

  return (
    <Layout>
      <p>{router.query.title}</p>
      <style jsx>{`
      p {
        color: orange;
      }
      `}</style>
    </Layout>
  )
});

export default Login;