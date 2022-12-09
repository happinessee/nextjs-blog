import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function Space() {
  return (
    <Layout>
      <Head>
        <title>This is my space...</title>
      </Head>
      <h1>Space...</h1>
      <h2>
        <Link href="/">go to main</Link>
      </h2>
    </Layout>
  );
}
