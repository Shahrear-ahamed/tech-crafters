import { AlignRightOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Space } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/RootLayout.module.css";

const { Header, Content, Footer } = Layout;

const navItems = [
  {
    path: "/allNews",
    name: "All News",
  },
  {
    path: "/about",
    name: "About Us",
  },
  {
    path: "/contact",
    name: "Contact Us",
  },
];

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const [navActive, setNavActive] = useState(false);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          padding: "0 20px",
          justifyContent: "space-between",
        }}>
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 0",
                borderRadius: "3px",
              }}>
              Tech Crafters
            </Link>
          </h1>
        </div>

        {/* // desktop */}
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Space size={"middle"}>
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                {item.name}
              </Link>
            ))}

            {
              // login and logout
              session?.user?.email ? (
                <Button type="primary" danger onClick={() => signOut()}>
                  Logout
                </Button>
              ) : (
                <Link href="/login">Login</Link>
              )
            }
          </Space>
        </Menu>

        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.mobile_nav_button}>
          <AlignRightOutlined />
        </div>

        {
          // mobile

          navActive && (
            <Menu mode="horizontal" className={styles.menu_items_mobile}>
              <Space size={"large"} className={styles.mobile_nav_div}>
                {navItems.map((item, index) => (
                  <Link key={index} href={item.path}>
                    {item.name}
                  </Link>
                ))}

                {
                  // login and logout
                  session?.user?.email ? (
                    <Button type="primary" danger onClick={() => signOut()}>
                      Logout
                    </Button>
                  ) : (
                    <Link href="/login">Login</Link>
                  )
                }
              </Space>
            </Menu>
          )
        }
      </Header>

      <Content
        style={{
          maxWidth: "1200px",
          margin: "10px auto",
          width: "95%",
          minHeight: "80vh",
        }}>
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}>
        Tech Crafters ©2023 All rights reserved.
      </Footer>
    </Layout>
  );
};
export default RootLayout;
