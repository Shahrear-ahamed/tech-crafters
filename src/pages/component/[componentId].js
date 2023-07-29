import RootLayout from "@/component/Layout/RootLayout";

const Details = ({ component }) => {
  console.log("componentId", component);

  return <div>This is component details</div>;
};

export default Details;

Details.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/components");
  const components = await res.json();

  // set params in paths
  const paths = components.map((component) => ({
    params: {
      componentId: component?._id,
    },
  }));

  // return all paths for getting ids
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/${params.componentId}`);
  const data = await res.json();

  // return individuals component
  return { props: { component: data } };
};
