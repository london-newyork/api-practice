import Head from 'next/head';
import React, { useCallback, useState, useEffect } from 'react';

export const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('エラーが発生したため、データの取得に失敗しました。');
      }
      const JSON = await res.json();
      setPosts(JSON);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (posts.length === 0) {
    <div>データは空です</div>;
  }

  return (
    <div>
      <Head>
        <title>Practice API</title>
        <meta name='description' content='Practice API' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-10 mt-10'>
        <ol className='list-decimal'>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      </main>
    </div>
  );
};
