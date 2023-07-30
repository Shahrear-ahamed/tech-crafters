import { Card, Typography } from "antd";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const { Title, Text } = Typography;

export default function FeaturedCategory({ categories }) {
  return (
    <>
      <div
        style={{
          marginTop: "30px",
        }}>
        <Title
          level={3}
          style={{
            margin: "8px",
            textAlign: "center",
          }}>
          Featured Category
        </Title>
        <Text
          style={{
            display: "block",
            textAlign: "center",
          }}>
          Get Your Desired Product from Featured Category!
        </Text>

        <div className={styles.featured_category_div}>
          {categories?.map((category) => (
            <div key={category.key}>
              <Link href={`/component/${category.slug}`}>
                <Card
                  hoverable
                  style={{ width: 180 }}
                  className={styles.featured_category_card}>
                  <Text strong>{category.name}</Text>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
