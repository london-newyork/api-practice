import Head from 'next/head'
import Image from 'next/image'
import React, { useCallback, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const [posts, setPosts] = useState([])

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const json = await res.json()
    setPosts(json);
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])


  return (
    <div>
      <Head>
        <title>Practice API</title>
        <meta name="description" content="Practice API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='px-10 mt-10'>
        <ol className='list-decimal'>
          {posts.map((post) => {
            return (
              <li key={post.id}>{post.title}</li>
            )
          })}
        </ol>
      </main>
    </div>
  )
}
