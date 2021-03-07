import { Col, Row } from "antd";
import classes from "./DetailsInfo.module.css";
import { checkProfitability } from "../../../../helpers/checkProfitability";

export const DetailsInfo = ({ title, description, price, profitability }) => {
  return (
    <div className={classes.detailsInfoWrapper}>
      <h1 className={classes.title}>{title}</h1>
      <p
        style={{
          textAlign: "left",
          color: "#888888",
          fontSize: "15px",
          margin: "9px 0 26px",
        }}
      >
        5 pc(s)
      </p>
      <div className={classes.detailes}>
        <Row gutter={24}>
          <Col span={8} className={classes.gridItem}>
            Ціна закупки
          </Col>
          <Col span={8} className={classes.gridItem}>
            Ціна продажу
          </Col>
          <Col span={8} className={classes.gridItem}>
            Рентабельність
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8} className={classes.subGridItem}>
            {parseInt(price) / 2}
            <span
              style={{ color: "#8C8C8C", fontSize: "16px", fontWeight: "400" }}
            >
              $
            </span>
          </Col>
          <Col span={8} className={classes.subGridItem}>
            {price}
            <span
              style={{ color: "#8C8C8C", fontSize: "16px", fontWeight: "400" }}
            >
              $
            </span>
          </Col>
          <Col
            span={8}
            style={{ color: checkProfitability(profitability) }}
            className={classes.subGridItem}
          >
            {profitability}%
          </Col>
        </Row>
      </div>
      <p className={classes.description}>{description}</p>
      <span className={classes.detailsText}>
        Детальніше<i className={classes.arrowDown}></i>
      </span>
    </div>
  );
};
