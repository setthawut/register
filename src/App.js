import React from "react";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";
import { Layout, Menu, Breadcrumb } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Dashboard
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content className="ant-layout-content">
              <Breadcrumb style={{ margin: "16px 0" }}>
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </>
      {/*  */}
    </ConnectedRouter>
  );
};

// App.propTypes = {
//   history: PropTypes.object,
// };

export default App;
