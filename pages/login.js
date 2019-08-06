import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Login = () => {
  const router = useRouter();

  return (
    <Layout>
      <p>
        <strong>{router.query.id}</strong>
        <span>Login Page</span>
      </p>
      <style jsx>{`
      p {
        span {
          color: orange;
        }
      }
      `}</style>
    </Layout>
  );
};

export default Login;