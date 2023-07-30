/* eslint-disable @next/next/no-img-element */
import { addComponent } from "@/redux/features/component/componentSlice";
import linkToCamelCase from "@/shared/linkToCamelCase";
import { Button, Card, Tooltip, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import styles from "../../styles/ProductCard.module.css";

const { Title, Text } = Typography;
export default function BuilderProductComponent({ product, slug }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    _id: id,
    productName: title,
    image,
    category,
    price,
    status,
    averageRating: rating,
  } = product;

  const reWriteSlug = linkToCamelCase(slug);

  const handleAddBuilder = () => {
    dispatch(addComponent({ componentName: reWriteSlug, data: product }));
    router.push("/buildPc");
  };

  return (
    <Card
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
        <Link href={`/component/details/${id}`}>
          <Tooltip
            placement="topLeft"
            title={title}
            style={{ fontSize: "10px" }}>
            <Title level={5}>{title.substring(0, 20) + "..."}</Title>
          </Tooltip>
        </Link>
        <Text type="secondary">{category}</Text>

        <div className={styles.price_status}>
          <Text strong>Price: ${price}</Text>
          <Text type={status === "In Stock" ? "success" : "danger"}>
            {status}
          </Text>
        </div>

        <ReactStars size={18} value={rating} edit={false} />

        <Button
          type="primary"
          disabled={status !== "In Stock"}
          onClick={() => handleAddBuilder()}>
          Add To The Builder
        </Button>
      </div>
    </Card>
  );
}
