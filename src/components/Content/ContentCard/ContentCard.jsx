import { Card, Col, Row } from "antd";
import { Tooltip } from "antd";
import { useHistory } from "react-router-dom";
import { checkProfitability } from "../../../helpers/checkProfitability";

import InfoIcon from "../../../assets/icons/information.svg";
import CartProductIcon from "../../../assets/icons/cart-product.svg";
import RateStarIcon from "../../../assets/icons/rate-start.svg";

import classes from "./ContentCard.module.css";
import { ProfitabilityDiagram } from "./ProfitabilityDiagram/ProfitabilityDiagram";

export const ContentCard = ({
  image,
  title,
  price,
  id,
  minQuantity,
  profitability,
  collapsed,
}) => {
  const history = useHistory();

  return (
    <Card
      style={collapsed ? { backgroundColor: "#F2F6FF", padding: "10px 0" } : undefined}
      className={classes.contentCard}
      bordered={false}
      onClick={() => history.push(`/${id}`)}
    >
      <img src={image} className={classes.contentImage} alt="product" />
      <p className={classes.contentTitle}>
        {title}{" "}
        <img src={RateStarIcon} alt="star" className={classes.starIcon} />
      </p>
      <div>
        {!collapsed && (
          <Row
            gutter={24}
            style={{
              fontSize: "12px",
              color: "#616977",
              textAlign: `${collapsed ? "center" : "left"}`,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col span={7} style={{ padding: 0 }}>
              Цена за 1 шт
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
        )}

        <Row
          gutter={24}
          style={{
            fontSize: "14px",
            textAlign: "left",
            padding: !collapsed ? "0 5px" : "0 10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col
            span={!collapsed ? 7 : 10}
            style={{ color: "#005BE4", padding: 0 }}
          >
            <span style={{ marginRight: "5px" }}>{price}$</span>
            {collapsed && (
              <Tooltip placement="top" title="Цена" color="#EAF2FF">
                <img src={InfoIcon} alt="info" />
              </Tooltip>
            )}
          </Col>
          <Col
            span={!collapsed ? 8 : 14}
            style={{
              color: checkProfitability(profitability),
              padding: 0,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ProfitabilityDiagram profitability={profitability} />
            <span style={{ marginRight: "5px" }}>{profitability}%</span>
            {collapsed && (
              <Tooltip
                placement="top"
                title="Минимальное количество товара, которое доступно к заказу"
                color="#EAF2FF"
              >
                <img src={InfoIcon} alt="info" />
              </Tooltip>
            )}
          </Col>
          {!collapsed && (
            <Col span={7} style={{ padding: 0 }}>
              <div className={classes.quantityCol}>
                x{minQuantity} <img src={CartProductIcon} alt="cart product" />
              </div>
            </Col>
          )}
        </Row>
        {/* MIN QUANTITY COLLAPSED*/}
        {collapsed && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "#8791A1",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              Мин <br /> количество
            </div>
            <div className={classes.quantityCollapsed}>
              x{minQuantity}{" "}
              <div
                style={{
                  mask: `url(${CartProductIcon}) center no-repeat`,
                  backgroundColor: "#4C7EFF",
                  height: "20px",
                  width: "20px",
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
