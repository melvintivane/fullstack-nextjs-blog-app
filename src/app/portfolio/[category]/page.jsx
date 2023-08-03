import React from 'react';
import styles from "./page.module.css";
import Button from '@/components/button/Button';
import Image from 'next/image';

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button url='#' text='See More'/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            src='https://images.pexels.com/photos/16878811/pexels-photo-16878811/free-photo-of-onibus-grafite-graffiti-hollywood.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=''
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button url='#' text='See More'/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            src='https://images.pexels.com/photos/16878811/pexels-photo-16878811/free-photo-of-onibus-grafite-graffiti-hollywood.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=''
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button url='#' text='See More'/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            src='https://images.pexels.com/photos/16878811/pexels-photo-16878811/free-photo-of-onibus-grafite-graffiti-hollywood.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
            alt=''
            fill={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Category;