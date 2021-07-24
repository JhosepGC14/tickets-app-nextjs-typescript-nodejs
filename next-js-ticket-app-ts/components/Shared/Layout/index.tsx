import { Layout } from "antd";
import FooterAntd from "../Footer";
import SidebarAntd from "../Sidebar";
const { Content } = Layout;

type LayoutAntdProps = {
  children: JSX.Element;
  hiddenMenu?: boolean;
};

const LayoutAntd = ({ children, hiddenMenu = false }: LayoutAntdProps) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SidebarAntd hiddenMenu={hiddenMenu} />
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <FooterAntd />
      </Layout>
    </Layout>
  );
};

export default LayoutAntd;
