import CartFilledIcon from "../../../../../assets/icons/cart-filled.svg";
import classes from "./PriceCalc.module.css";
import { Row, Col, Input, Button } from "antd";

export const PriceCalc = ({ price, value, setValue }) =>  (
    <Row gutter={24}>
      <Col
        span={8}
        style={{
          color: "#4E9616",
          fontSize: "24px",
          display: "flex",
          alignItems: "CENTER",
        }}
      >
        <p style={{ margin: 0 }}>
          {(parseFloat(price) * value).toFixed(1)}{" "}
          <span
            style={{
              color: "#8C8C8C",
              fontSize: "14px",
            }}
          >
            {" "}
            $
          </span>
        </p>
      </Col>
      <Col span={16}>
        <div style={{ display: "flex" }}>
          <Input
            type="number"
            value={value}
            onChange={setValue}
            style={{ padding: "15px 16px", fontSize: "16px" }}
          />
          <Button className={classes.buyButton}>
            <div
              style={{
                mask: `url(${CartFilledIcon}) center no-repeat`,
                marginRight: "12px",
                height: "15px",
                width: "15px",
                backgroundColor: "#fff",
              }}
            />
            Buy
          </Button>
        </div>
      </Col>
    </Row>
  );

