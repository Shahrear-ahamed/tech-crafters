import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useRouter } from "next/router";

const items = [
  {
    label: "CPU / Processor",
    key: "1",
    value: "processor",
  },
  {
    label: "Motherboard",
    key: "2",
    value: "motherboard",
  },
  {
    label: "RAM",
    key: "3",
    value: "ram",
  },
  {
    label: "Power Supply Unit",
    key: "4",
    value: "psu",
  },
  {
    label: "Storage Device",
    key: "5",
    value: "storage",
  },
  {
    label: "Monitor",
    key: "6",
    value: "monitor",
  },
];

export default function DropDown() {
  const router = useRouter();

  const handleMenuClick = (e) => {
    const data = e.domEvent.target.innerText;
    const url = items.find((item) => item.label === data).value;

    router.push(`/${url}`);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Component
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
}
