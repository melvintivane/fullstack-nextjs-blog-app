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
            width={350}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at velit nobis quos
            consectetur deserunt a eos debitis, perspiciatis iure tempore sunt ad iste laboriosam 
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis, 
            perspiciatis iure tempore sunt ad beatae suscipit impedit ipsa! Repellendus!
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis!
          </p>
        </div>
      </Link>
      <Link href='/blog/asdfg' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3986923/pexels-photo-3986923.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=""
            width={350}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at velit nobis quos
            consectetur deserunt a eos debitis, perspiciatis iure tempore sunt ad iste laboriosam 
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis, 
            perspiciatis iure tempore sunt ad beatae suscipit impedit ipsa! Repellendus!
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis!
          </p>
        </div>
      </Link>
      <Link href='/blog/asdfg' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3986923/pexels-photo-3986923.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=""
            width={350}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at velit nobis quos
            consectetur deserunt a eos debitis, perspiciatis iure tempore sunt ad iste laboriosam 
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis, 
            perspiciatis iure tempore sunt ad beatae suscipit impedit ipsa! Repellendus!
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis!
          </p>
        </div>
      </Link>
      <Link href='/blog/asdfg' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3986923/pexels-photo-3986923.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=""
            width={350}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at velit nobis quos
            consectetur deserunt a eos debitis, perspiciatis iure tempore sunt ad iste laboriosam 
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis, 
            perspiciatis iure tempore sunt ad beatae suscipit impedit ipsa! Repellendus!
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis!
          </p>
        </div>
      </Link>
      <Link href='/blog/asdfg' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3986923/pexels-photo-3986923.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=""
            width={350}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at velit nobis quos
            consectetur deserunt a eos debitis, perspiciatis iure tempore sunt ad iste laboriosam 
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis, 
            perspiciatis iure tempore sunt ad beatae suscipit impedit ipsa! Repellendus!
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis!
          </p>
        </div>
      </Link>
      <Link href='/blog/asdfg' className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3986923/pexels-photo-3986923.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=""
            width={350}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at velit nobis quos
            consectetur deserunt a eos debitis, perspiciatis iure tempore sunt ad iste laboriosam 
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis, 
            perspiciatis iure tempore sunt ad beatae suscipit impedit ipsa! Repellendus!
            nsectetur adipisicing elit. Omnis, at velit nobis quos consectetur deserunt a eos debitis!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;