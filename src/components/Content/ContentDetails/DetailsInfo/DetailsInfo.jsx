import { Col, Row, Tooltip } from "antd";
import classes from "./DetailsInfo.module.css";
import { checkProfitability } from "../../../../helpers/checkProfitability";
import InfoIcon from "../../../../assets/icons/information.svg";

export const DetailsInfo = ({
  title,
  description,
  price,
  profitability,
  collapsed,
}) => {
  return (
    <div className={classes.detailsInfoWrapper}>
      <h1 className={classes.title}>{title}</h1>
      <p
        style={{
          textAlign: "left",
          color: "#888888",
          fontSize: "15px",
          margin: `${!collapsed ? "9px 0 26px" : "9px 0 26px 15px"}`,
        }}
      >
        5 pc(s)
      </p>
      <div className={classes.details}>
        <Row gutter={24} style={{ display: "flex", alignItems: "center" }}>
          <Col span={8} className={classes.gridItem}>
            Ціна закупки
            <Tooltip placement="top" title="Tooltip">
              <img src={InfoIcon} alt="info" className={classes.infoIcon} />
            </Tooltip>
          </Col>
          <Col span={8} className={classes.gridItem}>
            Ціна продажу
            <Tooltip placement="top" title="Tooltip">
              <img src={InfoIcon} alt="info" className={classes.infoIcon} />
            </Tooltip>
          </Col>
          <Col span={8} className={classes.gridItem}>
            Рентабельність
            <Tooltip placement="top" title="Tooltip">
              <img src={InfoIcon} alt="info" className={classes.infoIcon} />
            </Tooltip>
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
