import React from "react";
import { Card, Divider, Row, Col } from "antd";

import classes from "./ProductChar.module.css";

export const ProductChar = ({ characteristics, collapsed }) => (
  <Card className={classes.productCharWrapper} bordered={false}>
    <div className={classes.collapsedBadge}>Характеристики</div>
    <h1 className={classes.titleBadge}>Характеристики товару</h1>
    {characteristics &&
      characteristics.map((char, index) => (
        <React.Fragment key={index}>
          <Row key={index} gutter={24} style={{ textAlign: "left" }}>
            <Col
              span={8}
              style={{ color: "#5B5B5B", fontSize: "13px" }}
              className={classes.colItem}
            >
              {char[0]}
            </Col>
            <Col
              span={16}
              style={{ fontSize: "14px" }}
              className={classes.colItem}
            >
              {char[1]}
            </Col>
          </Row>
          <Divider style={{ margin: "2px 0px 10px" }} className={classes.charDivider} />
        </React.Fragment>
      ))}
  </Card>
);
