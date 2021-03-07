import { Layout } from "antd";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./App.css";
import { Header } from "./components/Header/Header";
import { AppContent } from "./components/Content/Content";
import { useState } from "react";
import { Route } from "react-router-dom";
import { ContentDetails } from "./components/Content/ContentDetails/ContentDetails";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh", display: "flex" }}>
      <Sidebar setCollapsed={setCollapsed} />
      <Layout>
        <Header collapsed={collapsed} />
        <Route
          path="/"
          exact
          render={() => <AppContent collapsed={collapsed} />}
        />
        <Route path="/:id" exact render={() => <ContentDetails collapsed={collapsed} />} />
      </Layout>
    </Layout>
  );
}

export default App;
