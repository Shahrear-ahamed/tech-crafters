import RootLayout from "@/component/Layout/RootLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Crafters</title>
        <meta
          name="description"
          content="Tech crafters is an innovative pc builder company that provides the best pc building experience for our customers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
