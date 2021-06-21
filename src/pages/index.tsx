import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../components/layout';

const IndexPage: React.FC = () => {
  const text: string = '型定義したテキストだよ';

  return (
    <>
      <Layout>
        <main className="h-60">
          <h1 className="text-red-300">Home</h1>
          <h2>{text}</h2>
          <p>
            文章だよ 文章だよ 文章だよ 文章だよ 文章だよ 文章だよ 文章だよ
            文章だよ
          </p>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
