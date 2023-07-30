import RootLayout from "@/component/Layout/RootLayout";
import ComponentPicker from "@/component/UI/ComponentPicker";
import styles from "@/styles/PcBuilder.module.css";
import { Button, Typography } from "antd";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const { Title, Text } = Typography;

export default function PcBuilder({ categories }) {
  const componentStore = useSelector((state) => state.component);
  const components = componentStore?.pcComponents;
  const keys = Object.keys(components);

  const isNull = keys.some((key) => components[key] === null);

  const handleCompleteBuild = () => {
    if (!isNull) {
      toast.success("Build Completed");
    } else {
      toast.error("Please select all components");
    }
  };

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

      <div>
        <div className={styles.pc_builder_complete_button}>
          <Button
            type="primary"
            disabled={isNull}
            onClick={handleCompleteBuild}>
            Complete Build
          </Button>
        </div>
      </div>
    </div>
  );
}

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps() {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       categories: [],
  //     },
  //   };
  // }

  const res = await fetch(`${process.env.URL}/api/categories`);
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
  };
}
