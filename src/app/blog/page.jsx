import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/asdfg' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3986923/pexels-photo-3986923.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog