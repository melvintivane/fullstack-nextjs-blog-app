"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const session = useSession();

  const router = useRouter();

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
  }

  if (session.status === "loading") {
    //todo add skeleton or progress bar
    return <p>Loading</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  

  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
  }
};

export default Dashboard;
