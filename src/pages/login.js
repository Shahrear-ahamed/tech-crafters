import {
    GithubOutlined,
    GoogleOutlined,
    LoginOutlined,
} from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { signIn } from "next-auth/react";
import styles from "../styles/Login.module.css";

const { Text,Title } = Typography;

function Login() {

  return (
    <div className={styles.login_section}>
      <Space
        direction="vertical"
        align="center"
        size={16}
        className={styles.login_space}>
        <div className={styles.login_title_div}>
          <div
            style={{
              fontSize: "40px",
              textAlign: "center",
            }}>
            <LoginOutlined className={styles.login_icon} />
          </div>
          <Title className={styles.loginText}>Login account</Title>
        </div>
        <Space direction="vertical" size={18} align="center">
          <Button
            type="primary"
            size="large"
            icon={<GoogleOutlined />}
            className={styles.login_button}
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }>
            Login with Google
          </Button>
          <Button
            type="primary"
            size="large"
            icon={<GithubOutlined />}
            className={styles.login_button}
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }>
            Login with Github
          </Button>
        </Space>

        <div>
          <Text type="secondary">Tech Crafters ©2023 All rights reserved.</Text>
        </div>
      </Space>
    </div>
  );
}

export default Login;
