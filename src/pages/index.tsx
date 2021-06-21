import React from 'react';

import Header from '../components/header';

const IndexPage: React.FC = () => {
  const text: string = '型定義したテキストだよ';

  return (
    <>
      <Header />
      <main>
        <h1 className="text-red-300">Home</h1>
        <h2>{text}</h2>
        <p>
          文章だよ 文章だよ 文章だよ 文章だよ 文章だよ 文章だよ 文章だよ
          文章だよ
        </p>
      </main>
    </>
  );
};

export default IndexPage;