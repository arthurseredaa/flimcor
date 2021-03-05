import { Layout } from "antd";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./App.css";
import { Header } from "./components/Header/Header";
import { AppContent } from "./components/Content/Content";
import { useState } from "react";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh", display: "flex" }}>
      <Sidebar setCollapsed={setCollapsed} />
      <Layout>
        <Header collapsed={collapsed} />
        <AppContent />
      </Layout>
    </Layout>
  );
}

export default App;
