import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Component } from "react";
import Counter from "../components/Counter";
import Github from "../components/Github";
import Link from "next/link";

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

      <hr
        style={{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <Counter name={"Increment by 1"} mult={1} color={"blue"} />
      <Counter name={"Increment by 2"} mult={2} color={"green"} />

      <hr
        style={{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <Github />

      <hr
        style={{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <p>
        Check out my <Link href="/store">Fake Store</Link>.
      </p>
    </div>
  );
}
