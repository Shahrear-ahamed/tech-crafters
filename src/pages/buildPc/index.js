import RootLayout from "@/component/Layout/RootLayout";
import ComponentPicker from "@/component/UI/ComponentPicker";
import styles from "@/styles/PcBuilder.module.css";
import { Typography } from "antd";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

export default function PcBuilder({ categories }) {
  const componentStore = useSelector((state) => state.component);
  return (
    <div className={styles.pc_builder_main}>
      <div className={styles.pc_builder_header}>
        <Title level={4}>Build Your Own PC With - Tech Crafters</Title>

        <div className={styles.pc_builder_price_top}>
          <Text style={{ color: "white" }}>$ {componentStore?.price}</Text>
          <Text style={{ color: "white" }}>{componentStore?.items} Items</Text>
        </div>
      </div>

      {/* // component picker are here  */}
      <div>
        {categories?.map((category) => {
          return (
            <ComponentPicker
              key={category.key}
              title={category.name}
              link={category.slug}
            />
          );
        })}
      </div>
    </div>
  );
}

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
  };
}
