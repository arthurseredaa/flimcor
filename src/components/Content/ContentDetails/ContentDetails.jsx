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
      const res = await fetch("goods.json")
        .then((data) => data.json())
        .then((data) => data.data.filter((item) => item.id === +id));
      setState({ ...res[0] });
    };

    getData(id);
  }, [id]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.detailsWrapper}>
      {state && (
        <div className={classes.container}>
          <Row gutter={24} className={classes.collapsedPrice}>
            <Col span={10} style={{ fontSize: "26px", color: " #005BE4" }}>
              {(parseFloat(state.price) * value).toFixed(1)}{" "}
              <span style={{ fontSize: "12px", color: "rgba(0,0,0,.5)" }}>
                $
              </span>
            </Col>
            <Col
              span={14}
              style={{
                display: "flex",
                paddingRight: 0,
                justifyContent: "flex-end",
              }}
            >
              <div className={classes.calcQunatity}>
                <span
                  className={classes.divider}
                  onClick={() => value >= 1 && setValue(value - 1)}
                >
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
                <img src={CartFilledIcon} width="24px" alt="cart filled" />
              </Button>
            </Col>
          </Row>
          <Row
            gutter={24}
            style={{ textAlign: "center" }}
            className={classes.productRow}
          >
            <Col xl={7} lg={12} md={12} sm={24} xs={24}>
              <img
                src={state.image}
                alt="product"
                className={classes.productImage}
              />
            </Col>
            <Col xl={10} lg={12} md={12} sm={24} xs={24}>
              <DetailsInfo {...state} collapsed={collapsed} />
            </Col>

            <Col
              xl={{ span: 7 }}
              lg={{ order: 3, span: 12 }}
              md={{ order: 3, span: 12 }}
              sm={{ order: 4, span: 24 }}
              xs={{ order: 4, span: 24 }}
            >
              <OrderInfo {...state} value={value} setValue={handleChange} />
            </Col>
            <Col
              xl={7}
              lg={12}
              md={{ order: 4, span: 12 }}
              xs={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ProductChar
                collapsed={collapsed}
                characteristics={state.characteristics}
              />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
