/* eslint-disable @next/next/no-img-element */
import { Card, Typography } from "antd";
import ReactStars from "react-rating-stars-component";
import styles from "../../styles/ProductCard.module.css";

const { Title, Text } = Typography;

const ProductCard = ({ product }) => {
  const { title, image, category, price, status, rating } = product;
  return (
    <Card
      hoverable
      style={{ width: 260 }}
      cover={<img className={styles.product_img} src={image} alt={title} />}>
      <div>
        <Title level={4}>{title}</Title>
        <Text type="secondary">{category}</Text>

        <div className={styles.price_status}>
          <Text strong>Price: ${price}</Text>
          <Text type={status === "In Stock" ? "success" : "danger"}>
            {status}
          </Text>
        </div>

        <ReactStars size={18} value={rating} edit={false} />
      </div>
    </Card>
  );
};

export default ProductCard;
