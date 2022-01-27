import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { getAllFilesMetadata } from '../lib/mdx'

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>germanruzca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a mi blog 
        </h1>

        <div className={styles.grid}>
        {posts.map(post => {
          return (
            <Link 
            key={post.slug} 
            href={`/${post.slug}`} 
          >
          <div className={styles.card}>
            <a>
              <h2>{post.title} &rarr;</h2>
              <p>{post.date}</p>
            </a>
          </div>
          </Link>
          );
        })}
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.github.com/germanruzca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by German Ruz
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  console.log(posts);
  return {
    props: { posts },
  };
}