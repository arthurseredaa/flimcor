import { Layout } from "antd";
import { useEffect, useState } from "react";
import classes from "./Content.module.css";

import { ContentCard } from "./ContentCard/ContentCard";

const { Content } = Layout;

export const AppContent = (params) => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const getGoods = async () => {
      let res = await fetch("goods.json", {
        "Content-Type": "application/json",
      })
        .then((data) => data.json())
        .then((data) => data);
      setGoods([...res.data]);
    };

    getGoods();
  }, []);

  return (
    <Content
      style={{
        padding: "24px 16px 0",
        backgroundColor: "#fff",
        overflow: "scroll",
        overflowX: "hidden"
      }}
    >
      <div>
        {goods.length === 0 ? (
          <h1 style={{ margin: "auto", width: "200px" }}>Loading...</h1>
        ) : (
          <div className={classes.gridWRapper}>
            {goods &&
              goods.map((item) => <ContentCard key={item.id} {...item} />)}
          </div>
        )}
      </div>
    </Content>
  );
};
