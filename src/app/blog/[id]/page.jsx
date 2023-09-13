import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";



async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
           {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16471764/pexels-photo-16471764/free-photo-of-face-rosto-cara-retrato.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jonh Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17781404/pexels-photo-17781404/free-photo-of-ponte-espaco-curva-luz-do-dia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nihil
          consectetur cupiditate eveniet natus ipsum aspernatur ab reiciendis,
          rem nisi fugit voluptatem quaerat a minus reprehenderit numquam
          temporibus. Quibusdam, modi. Ex porro laboriosam hic obcaecati
          excepturi sed atque dolorum quaerat soluta nulla, repellat quisquam
          magnam perspiciatis temporibus. Quos aliquam odit placeat veniam
          voluptate ipsum nihil molestias suscipit repellendus ad? Aperiam iste
          repudiandae ratione laborum quod accusantium aut. Repellat
          perspiciatis quo nobis deserunt necessitatibus eaque nisi nesciunt.
          Quas enim adipisci quia cum aliquam excepturi, asperiores, nihil
          consequuntur saepe minus ipsa amet ratione quos incidunt. Tenetur
          voluptates, sapiente voluptatum quis sint voluptas. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Modi nihil consectetur
          cupiditate eveniet natus ipsum aspernatur ab reiciendis, rem nisi
          fugit voluptatem quaerat a minus reprehenderit numquam temporibus.
          Quibusdam, modi. Ex porro laboriosam hic obcaecati excepturi sed atque
          dolorum quaerat soluta nulla, repellat quisquam magnam perspiciatis
          temporibus. Quos aliquam odit placeat veniam voluptate ipsum nihil
          molestias suscipit repellendus ad? Aperiam iste repudiandae ratione
          laborum quod accusantium aut. Repellat perspiciatis quo nobis deserunt
          necessitatibus eaque nisi nesciunt. Quas enim adipisci quia cum
          aliquam excepturi, asperiores, nihil consequuntur saepe minus ipsa
          amet ratione quos incidunt. Tenetur voluptates, sapiente voluptatum
          quis sint voluptas.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
