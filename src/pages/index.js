import FeaturedCategory from "@/component/FeaturedCategory";
import FeaturedProducts from "@/component/FeaturedProducts";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import RootLayout from "@/component/Layout/RootLayout";
import Head from "next/head";

export default function Home({ randomComponents, allComponents }) {
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
        <Hero />
      </section>

      <section>
        <FeaturedProducts components={randomComponents} />
      </section>
      <section>
        <FeaturedCategory categories={allComponents} />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const randomComponentsRes = await fetch(
    "http://localhost:3000/api/randomComponents"
  );
  const allComponentsRes = await fetch("http://localhost:3000/api/categories");

  const randomComponents = await randomComponentsRes.json();
  const allComponents = await allComponentsRes.json();

  return { props: { randomComponents, allComponents } };
};
