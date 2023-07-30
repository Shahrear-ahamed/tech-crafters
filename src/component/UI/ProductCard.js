/* eslint-disable @next/next/no-img-element */
import { Card, Tooltip, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";
import styles from "../../styles/ProductCard.module.css";

const { Title, Text } = Typography;

const ProductCard = ({ product }) => {
  const {
    _id: id,
    productName: title,
    image,
    category,
    price,
    status,
    averageRating: rating,
  } = product;

  return (
    <Link href={`/component/details/${id}`}>
      <Card
        hoverable
        style={{ width: 260, padding: "10px" }}
        cover={
          <Image
            height={220}
            width={260}
            className={styles.product_img}
            src={image}
            alt={title}
          />
        }>
        <div>
          <Tooltip
            placement="topLeft"
            title={title}
            style={{ fontSize: "10px" }}>
            <Title level={5}>{title.substring(0, 20) + "..."}</Title>
          </Tooltip>
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
    </Link>
  );
};

export default ProductCard;
