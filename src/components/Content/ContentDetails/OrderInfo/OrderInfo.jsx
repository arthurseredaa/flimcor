import { Divider, Row, Col } from "antd";
import classes from "./OrderInfo.module.css";
import UkraineFlag from "../../../../assets/icons/ukraine-flag.svg";
import { PriceCalc } from "./PriceCalc/PriceCalc";

export const OrderInfo = ({ title, price, minQuantity, value, setValue }) => (
  <div className={classes.orderInfoWrapper}>
    <p className={classes.articul}>
      Артикул: <span style={{ color: "#000" }}>KI127</span>
    </p>
    <h1 className={classes.title}>{title}</h1>
    <p className={classes.price}>
      {price} <span style={{ color: "#8C8C8C", fontSize: "18px" }}>$</span>
    </p>
    <Divider style={{ margin: "18px 0 16px" }} />
    <p style={{ color: "#5B626D" }} className={classes.productInfo}>
      Мінімальна кількість замовлення:{" "}
      <span style={{ color: "#000" }}>{minQuantity} шт</span>
    </p>
    <p style={{ color: "#5B626D" }} className={classes.productInfo}>
      Час доставки: <span style={{ color: "#000" }}>12 днів</span>
    </p>
    <p style={{ color: "#5B626D" }} className={classes.productInfo}>
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
    <PriceCalc price={price} value={value} setValue={setValue} />
  </div>
);
