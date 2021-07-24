import { Layout, Menu } from "antd";
import Link from "next/link";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

type SidebarAntdProps = {
  hiddenMenu: boolean;
};

const SidebarAntd = ({ hiddenMenu }: SidebarAntdProps) => {
  return (
    <Sider
      hidden={hiddenMenu}
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
    >
      <div className="logo">
        <span>Ticket's App</span>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link href="/cola-tickets">Cola Tickets</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link href="/crear-tickets">Crear Tickets</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarAntd;
