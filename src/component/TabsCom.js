import { Tabs, Typography } from "antd";
import ReactStars from "react-rating-stars-component";
import styles from "../styles/DetailedComponent.module.css";

const { Text, Title } = Typography;

export default function TabsCom({
  reviews,
  keyFeatures,
  averageRating,
  description,
}) {
  // tab items
  const tabItems = [
    {
      key: "1",
      tab: "Key Features",
      content: (
        <div>
          <Text strong style={{ fontSize: "16px", marginBottom: "30px" }}>
            Key Features
          </Text>

          <ul style={{ margin: "10px 0  0 0" }}>
            {Object.entries(keyFeatures).map(([key, value]) => {
              const firstLetter = key.charAt(0).toUpperCase() + key.slice(1);

              const keyName = firstLetter.replace(/([A-Z])/g, " $1").trim();
              return (
                <li key={key} style={{ listStyle: "none", margin: "5px 0" }}>
                  <Text style={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "bold" }}>{keyName}:</span>{" "}
                    {value}
                  </Text>
                </li>
              );
            })}
          </ul>
        </div>
      ),
    },
    {
      key: "2",
      tab: "Description",
      content: (
        <div className={styles.details_description}>
          <Title level={3}>Description</Title>
          <Text>{description}</Text>
        </div>
      ),
    },
    {
      key: "3",
      tab: "Reviews",
      content: (
        <div>
          <Title level={3}>Reviews ({reviews?.length})</Title>
          <Text style={{ fontSize: "16px" }}>
            Get specific details about this product from customers who own it.
          </Text>

          <div style={{ display: "flex", alignItems: "center" }}>
            <ReactStars size={24} value={averageRating} edit={false} />
            <Text strong style={{ marginLeft: "10px", fontSize: "18px" }}>
              {averageRating.toFixed(1)} out of 5
            </Text>
          </div>

          {/* // reviews  */}
          <div>
            {reviews?.map((review) => {
              const { _id, username, rating, comment, date } = review;

              const changeDate = new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <div key={_id} className={styles.review}>
                  <ReactStars size={18} value={rating} edit={false} />
                  <Text style={{ marginTop: "10px", display: "inline-block" }}>
                    {comment}
                  </Text>

                  <div className={styles.review_date}>
                    <Text type="secondary">
                      By <Text strong>{username}</Text>
                    </Text>
                    <Text type="secondary"> on</Text>
                    <Text type="secondary"> {changeDate}</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      size={"large"}
      items={tabItems.map((data, i) => {
        const id = String(i + 1);
        return {
          label: data.tab,
          key: id,
          children: data.content,
        };
      })}
    />
  );
}
