import { Row, Col, Button } from "antd";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./ContentDetails.module.css";
import { DetailsInfo } from "./DetailsInfo/DetailsInfo";
import { OrderInfo } from "./OrderInfo/OrderInfo";
import { ProductChar } from "./ProductChar/ProductChar";
import CartFilledIcon from "../../../assets/icons/cart-filled.svg";

export const ContentDetails = ({ collapsed }) => {
  const [state, setState] = useState({});
  const [value, setValue] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id) => {
      const res = await fetch("goods.json", {
        "Content-Type": "application/json",
      })
        .then((data) => data.json())
        .then((data) => data.data.filter((item) => item.id === +id));
      setState({ ...res[0] });
    };

    getData(id);
  }, [id]);

  const handleDivid = () => {
    if (value !== 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className={classes.detailsWrapper}>
      {state && (
        <div className={classes.container}>
          {collapsed && (
            <Row gutter={24} className={classes.collapsedPrice}>
              <Col span={10} style={{ fontSize: "26px", color: " #005BE4" }}>
                {(parseFloat(state.price) * value).toFixed(1)}{" "}
                <span style={{ fontSize: "12px", color: "rgba(0,0,0,.5)" }}>
                  $
                </span>
              </Col>
              <Col span={14} style={{ display: "flex", paddingRight: 0, justifyContent: "flex-end" }}>
                <div className={classes.calcQunatity}>
                  <span className={classes.divider} onClick={handleDivid}>
                    -
                  </span>
                  <span className={classes.value}>
                    <p>{value}</p>
                  </span>
                  <span
                    className={classes.plus}
                    onClick={() => setValue(value + 1)}
                  >
                    +
                  </span>
                </div>

                <Button className={classes.buy}>
                  <img src={CartFilledIcon} width="24px" />
                </Button>
              </Col>
            </Row>
          )}
          <Row
            gutter={{ lg: 24, md: 24 }}
            style={{ textAlign: "center" }}
            className={classes.productRow}
          >
            <Col lg={7} md={12} sm={24}>
              <img
                src={state.image}
                alt="product"
                className={classes.productImage}
              />
            </Col>
            <Col lg={10} md={12} sm={24}>
              <DetailsInfo {...state} collapsed={collapsed} />
            </Col>
            {state && state.characteristics && collapsed && (
              <Col
                lg={7}
                md={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductChar collapsed={collapsed} characteristics={state.characteristics} />
              </Col>
            )}
            {!collapsed && (
              <Col lg={7} md={24} sm={24}>
                <OrderInfo {...state} />
              </Col>
            )}
          </Row>
          {state && state.characteristics && !collapsed && (
            <Row gutter={24}>
              <Col
                lg={7}
                md={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ProductChar collapsed={collapsed} characteristics={state.characteristics} />
              </Col>
            </Row>
          )}
          {collapsed && (
            <Col lg={7} md={24} sm={24}>
              <OrderInfo {...state} />
            </Col>
          )}
        </div>
      )}
    </div>
  );
};
