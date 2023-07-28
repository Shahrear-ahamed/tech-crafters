import { Layout, Menu } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

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
          <Link href="/allNews">
            <items>All News</items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}>
              About Us
            </items>
          </Link>
          <Link href="/contact">
            <items>Contact Us</items>
          </Link>
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
