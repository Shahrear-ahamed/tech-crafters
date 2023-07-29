import { Col, Row, Typography } from "antd";
import ProductCard from "./UI/ProductCard";

const { Title, Text } = Typography;

export default function FeaturedProducts({ components }) {
  return (
    <>
      <Title
        level={3}
        style={{
          margin: "8px",
          textAlign: "center",
        }}>
        Featured Products
      </Title>
      <Text
        style={{
          display: "block",
          textAlign: "center",
        }}>
        Check & Get Your Desired Product!
      </Text>

      <Row justify={"center"} gutter={[16, 16]} style={{ marginTop: "30px" }}>
        {components.map((component) => (
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
    </>
  );
}
