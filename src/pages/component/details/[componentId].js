import RootLayout from "@/component/Layout/RootLayout";
import styles from "@/styles/DetailedComponent.module.css";

import TabsCom from "@/component/TabsCom";
import { Typography } from "antd";
import Image from "next/image";

const { Text, Title } = Typography;

const Details = ({ component }) => {
  const {
    _id,
    status,
    reviews,
    productName,
    price,
    keyFeatures,
    image,
    description,
    category,
    averageRating,
  } = component;

  return (
    <div className={styles.details_main}>
      <div className={styles.details_top}>
        <div className={styles.img_div}>
          {/* <img src={image} alt={productName} className={styles.details_img} /> */}
          <Image src={image} alt={productName} height={300} width={300} />
        </div>

        <div className={styles.details_key_features}>
          <Title level={3}>{productName}</Title>
          <Text className={styles.brand} strong>
            <Text type="secondary">Brand:</Text> {keyFeatures?.brand}
          </Text>

          <div className={styles.status_div}>
            <Text>Category: {category}</Text>
            <Text type={status === "In Stock" ? "success" : "danger"}>
              {status}
            </Text>
          </div>
          <Title level={4}>Price: ${price}</Title>
        </div>
      </div>

      <div className={styles.details_bottom}>
        <TabsCom
          reviews={reviews}
          description={description}
          keyFeatures={keyFeatures}
          averageRating={averageRating}
        />
      </div>
    </div>
  );
};

export default Details;

Details.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/api/components`);
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
  const res = await fetch(
    `${process.env.URL}/api/component/${params.componentId}`
  );
  const data = await res.json();

  // return individuals component
  return { props: { component: data } };
};
