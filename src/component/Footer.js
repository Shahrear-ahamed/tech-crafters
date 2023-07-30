import { MailFilled, MonitorOutlined, PhoneFilled } from "@ant-design/icons";
import { Typography } from "antd";
import styles from "../styles/Home.module.css";

const { Title } = Typography;

export default function Footer() {
  return (
    <>
      <div className={styles.footer_main}>
        <div className={styles.footer_address_parent}>
          <div className={styles.footer_address}>
            <div className={styles.footer_address_icon}>
              <MonitorOutlined />
            </div>
            <div className={styles.footer_address_text}>
              <Title level={5}>Tech Crafters Tower</Title>
              <Title strong level={5} style={{ marginTop: "5px" }}>
                1234 Main Street, Dhaka, Bangladesh
              </Title>
            </div>
          </div>
          <div className={styles.footer_address}>
            <div className={styles.footer_address_icon}>
              <PhoneFilled />
            </div>
            <div className={styles.footer_address_text}>
              <Title strong level={5}>
                +880 1234 567 890
              </Title>
            </div>
          </div>
          <div className={styles.footer_address}>
            <div className={styles.footer_address_icon}>
              <MailFilled />
            </div>
            <div className={styles.footer_address_text}>
              <Title strong level={5}>
                support@techcrafters.com
              </Title>
            </div>
          </div>
        </div>
        <div>
          <Title strong level={4}>
            About Us
          </Title>
          <p>
            Star Tech has won the heart of many people and now is a country-wide
            renowned brand. That has been possible due to the hard work Star
            Tech has done to satisfy its customers.
          </p>
        </div>
      </div>
    </>
  );
}
