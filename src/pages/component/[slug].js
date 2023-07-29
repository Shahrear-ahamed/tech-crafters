import RootLayout from "@/component/Layout/RootLayout";
import ProductCard from "@/component/UI/ProductCard";
import styles from "@/styles/ComponentCategory.module.css";
import { Col, Row, Typography } from "antd";
import { useRouter } from "next/router";

const { Text } = Typography;

const ComponentCategory = ({ slugComponents }) => {
  const router = useRouter();
  const { slug } = router.query;

  // Capitalize the first letter of each word
  const capitalizedWords = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section>
      <div className={styles.slug_title_div}>
        <Text strong>{capitalizedWords}</Text>
        <Text>Total Components {slugComponents.length}</Text>
      </div>

      <div>
        <Row justify={"center"} gutter={[16, 16]} style={{ marginTop: "30px" }}>
          {slugComponents?.map((component) => (
            <Col
              xs={24}
              sm={12}
              lg={8}
              xl={6}
              key={component._id}
              style={{ flex: "0" }}>
              <ProductCard key={component._id} product={component} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ComponentCategory;

ComponentCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  const res = await fetch(
    `http://localhost:3000/api/component/category/${slug}`
  );
  const slugComponents = await res.json();

  return { props: { slugComponents } };
};
