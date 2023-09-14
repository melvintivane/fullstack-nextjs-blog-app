"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  //Client-side data fetching with useEffect
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setError(true);
  //       return notFound();
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  //Client-side data fetching with SWR
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  function Profile() {
    const { data, error, isLoading } = useSWR(
      "https://jsonplaceholder.typicode.com/posts",
      fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    console.log(data);
  }

  Profile();

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
