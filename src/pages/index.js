import FeaturedProducts from "@/component/FeaturedProducts";
import RootLayout from "@/component/Layout/RootLayout";
import Head from "next/head";

export default function Home({ randomComponents }) {
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

      <section>
        <FeaturedProducts components={randomComponents} />
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/randomComponents");
  const randomComponents = await res.json();

  return { props: { randomComponents } };
};
