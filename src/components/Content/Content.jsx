import { Row, Col } from 'antd';
import { Layout } from "antd";
const { Content } = Layout;


export const AppContent = (params) => {
  return (
    <Content style={{ padding: "24px 16px 0", backgroundColor: "#fff" }}>
    <div style={{ padding: 24, minHeight: 360 }}>content</div>
  </Content>
  )
}
