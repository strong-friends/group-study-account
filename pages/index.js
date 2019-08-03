import Layout from "../components/Layout";
import Link from "next/link";

const A = props => (
  <Link prefetch href={`/${props.id}`} as={`/${props.id}`}>
    <a>{props.id}</a>
  </Link>
);

const Index = () => (
  <Layout>
    <A id="login" />
  </Layout>
);

export default Index;
