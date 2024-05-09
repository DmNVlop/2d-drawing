import {
  LeftSquareOutlined,
  RightSquareOutlined,
  UpSquareOutlined,
} from "@ant-design/icons";
import { message } from "antd";

const handleMenuClick = (e) => {
  const x = items.find((i) => i.key === e.key);
  message.info("Activada " + x.label + ".");
};

const items = [
  {
    label: "Pieza 1 (Izquierda)",
    key: "1",
    icon: <LeftSquareOutlined />,
  },
  {
    label: "Pieza 2 (Arriba)",
    key: "2",
    icon: <UpSquareOutlined />,
    danger: true,
  },
  {
    label: "Pieza 3 (Derecha)",
    key: "3",
    icon: <RightSquareOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default menuProps;
