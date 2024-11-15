import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Component } from "react";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Morgan Hanson welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Counter name={"Increment by 1"} mult={1} color={"blue"} />
      <Counter name={"Increment by 2"} mult={2} color={"green"} />

      <Github />
    </div>
  );
}
