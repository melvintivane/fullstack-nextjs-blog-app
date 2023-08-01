import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 mallamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image className={styles.icon} src='/1.png' width={15} height={15} alt='Malla Mia'/>
        <Image className={styles.icon} src='/2.png' width={15} height={15} alt='Malla Mia'/>
        <Image className={styles.icon} src='/3.png' width={15} height={15} alt='Malla Mia'/>
        <Image className={styles.icon} src='/4.png' width={15} height={15} alt='Malla Mia'/>
      </div>
    </div>
  )
}

export default Footer