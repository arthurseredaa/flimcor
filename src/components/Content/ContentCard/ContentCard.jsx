import { Card, Col, Row } from "antd";
import { Tooltip } from "antd";
import classes from "./ContentCard.module.css";

import InfoIcon from "../../../assets/icons/information.svg";
import CartProductIcon from "../../../assets/icons/cart-product.svg";

const checkProfitability = (prof) => {
  const num = parseInt(prof);

  if (num > 400) return "#EA565E";
  if (num > 100) return "#EBA80F";
  if (num < 100) return "#4E9616";
};

export const ContentCard = ({
  image,
  title,
  price,
  isPartner,
  id,
  minQuantity,
  profitability,
}) => {
  return (
    <Card className={classes.contentCard} bordered={false}>
      <img src={image} className={classes.contentImage} alt="product" />
      <p className={classes.contentTitle}>{title}</p>
      <div>
        <Row
          gutter={24}
          style={{ fontSize: "12px", color: "#616977", textAlign: "left" }}
        >
          <Col span={7} style={{ padding: 0 }}>
            Цена за 1 штуку
          </Col>
          <Col span={8} style={{ padding: 0 }}>
            Рентабельность{" "}
            <Tooltip placement="top" title="Рентабельность" color="#EAF2FF">
              <img src={InfoIcon} alt="info" />
            </Tooltip>
          </Col>
          <Col span={7} style={{ paddingLeft: "15px" }}>
            Мин{" "}
            <Tooltip
              placement="top"
              title="Минимальное количество товара, которое доступно к заказу"
              color="#EAF2FF"
            >
              <img src={InfoIcon} alt="info" />
            </Tooltip>
          </Col>
        </Row>
        <Row gutter={24} style={{ fontSize: "14px", textAlign: "left" }}>
          <Col span={8} style={{ color: "#005BE4", padding: 0 }}>
            {price}
          </Col>
          <Col
            span={8}
            style={{ color: checkProfitability(profitability), padding: 0 }}
          >
            {profitability}%
          </Col>
          <Col span={8} style={{ padding: 0 }}>
            <div
              style={{
                backgroundColor: "#F0F3F8",
                borderRadius: "3px",
                color: "#959CAE",
                textAlign: "center",
                width: "70%",
                padding: "5px 3px"
              }}
            >
              x{minQuantity} <img src={CartProductIcon} alt="cart product" />
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};
