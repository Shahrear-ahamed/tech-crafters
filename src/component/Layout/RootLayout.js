import { Layout, Menu, Space } from "antd";
import Link from "next/link";
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
  {
    path: "/login",
    name: "Login",
  },
];

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}>
              Tech Crafters
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className="menu_items">
          <Space size={"middle"}>
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                {item.name}
              </Link>
            ))}
          </Space>
        </Menu>
      </Header>

      <Content
        style={{
          maxWidth: "1200px",
          margin: "10px auto",
          width: "100%",
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
