import { withRouter } from 'next/router';
import Layout from '../components/Layout/Layout';

const Loggin = withRouter(() => (
  <Layout>
    <p>로그인</p>
    <style jsx>{`
    p {
      color: orange;
    }
    `}</style>
  </Layout>
));

export default Loggin;