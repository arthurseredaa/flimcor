import { Divider, Row, Col, Input, Button } from "antd";
import classes from "./OrderInfo.module.css";
import UkraineFlag from "../../../../assets/icons/ukraine-flag.svg";
import { useState } from "react";
import CartFilledIcon from "../../../../assets/icons/cart-filled.svg";

export const OrderInfo = ({ title, price, minQuantity }) => {
  const [value, setValue] = useState(1);

  return (
    <div className={classes.orderInfoWrapper}>
      <p className={classes.articul}>
        Артикул: <span style={{ color: "#000" }}>KI127</span>
      </p>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.price}>
        {parseInt(price)}{" "}
        <span style={{ color: "#8C8C8C", fontSize: "18px" }}>$</span>
      </p>
      <Divider style={{ margin: "18px 0 16px" }} />
      <p style={{ color: "#5B626D" }}>
        Мінімальна кількість замовлення:{" "}
        <span style={{ color: "#000" }}>{minQuantity} шт</span>
      </p>
      <p style={{ color: "#5B626D" }}>
        Час доставки: <span style={{ color: "#000" }}>12 днів</span>
      </p>
      <p style={{ color: "#5B626D" }}>
        Розміщення товару:{" "}
        <span style={{ color: "#000" }}>
          склад, Україна <img src={UkraineFlag} alt="flag" />
        </span>
      </p>
      <Divider />
      <Row gutter={24} style={{ color: "#5B626D", fontSize: "14px" }}>
        <Col span={8}>Сума</Col>
        <Col span={16}>Количество</Col>
      </Row>
      <Row gutter={24}>
        <Col
          span={8}
          style={{
            color: "#4E9616",
            fontSize: "24px",
            display: "flex",
          }}
        >
          <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
            {parseInt(price) * value}{" "}
            <span
              style={{
                color: "#8C8C8C",
                fontSize: "14px",
              }}
            >
              $
            </span>
          </p>
        </Col>
        <Col span={16}>
          <div style={{ display: "flex" }}>
            <Input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ padding: "15px 16px" }}
            />
            <Button className={classes.buyButton}>
              <img
                src={CartFilledIcon}
                alt="cart filled"
                style={{ marginRight: "12px" }}
              />
              Buy
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
