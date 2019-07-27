import Layout from '../components/Layout';
import Link from 'next/link';

const A = props => (
  <Link href={`/${props.title}`}>
    <a>{props.title}</a>
  </Link>
);

const Index = () => (
  <Layout>
    <A title="loggin" />
  </Layout>
);

export default Index;
