import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/404.module.css";

export default function PageNotFound() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Tech crafters is an innovative pc builder company that provides the best pc building experience for our customers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.notFoundDiv}>
        <div className={styles.notFound}>
          <div className={styles.notFound404}>
            <h1>
              4<span></span>4
            </h1>
          </div>
          <h2>Oops! Page Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <Link href="/">Back to homepage</Link>
        </div>
      </div>
    </>
  );
}
