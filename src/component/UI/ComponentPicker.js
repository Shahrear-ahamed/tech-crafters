import { removeComponent } from "@/redux/features/component/componentSlice";
import linkToCamelCase from "@/shared/linkToCamelCase";
import styles from "@/styles/PcBuilder.module.css";
import { Badge, Button, Divider, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const { Text } = Typography;

export default function ComponentPicker({ title, link }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const component = useSelector((state) => state.component);
  const componentStoreKey = linkToCamelCase(link);

  const storedComponentData = component?.pcComponents[componentStoreKey];

  const handleSelect = (route) => {
    router.push(`/buildPc/choose/${route}`);
  };

  const handleRemove = () => {
    dispatch(removeComponent({ componentName: componentStoreKey }));
  };

  return (
    <div>
      <div className={styles.picker_main_div}>
        <Badge.Ribbon placement="start" text="Required">
          <div className={styles.picker_div}>
            <Text
              strong
              type="secondary"
              className={styles.picker_component_name}>
              {title}
            </Text>
            <Button
              type="primary"
              className={styles.picker_button}
              onClick={() => handleSelect(link)}>
              Select
            </Button>
          </div>
        </Badge.Ribbon>

        {
          // picker component
          storedComponentData && (
            <div className={styles.component_picked}>
              <div className={styles.component_picked_image}>
                <Image
                  src={storedComponentData?.image}
                  alt={storedComponentData?.productName}
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <Text strong type="secondary">
                  {storedComponentData?.productName}
                </Text>
              </div>
              <div className={styles.action_div}>
                <div>
                  <Text strong>$ {storedComponentData?.price}</Text>
                </div>
                <Divider type="vertical" style={{ color: "black" }} />
                <div>
                  <Button danger onClick={() => handleRemove()}>
                    <Text strong type="danger">
                      Remove
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
