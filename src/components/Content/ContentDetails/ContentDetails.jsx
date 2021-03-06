import { Row, Col } from "antd";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./ContentDetails.module.css";
import { DetailsInfo } from "./DetailsInfo/DetailsInfo";
import { OrderInfo } from "./OrderInfo/OrderInfo";
import { ProductChar } from "./ProductChar/ProductChar";

export const ContentDetails = () => {
  const [state, setState] = useState({});
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

  return (
    <div className={classes.detailsWrapper}>
      {state && (
        <div className={classes.container}>
          <Row gutter={{ lg: 24, md: 12 }} style={{ textAlign: "center" }}>
            <Col lg={7} md={12}>
              {" "}
              <img
                src={state.image}
                alt="product"
                className={classes.productImage}
              />
            </Col>
            <Col lg={10} md={12}>
              <DetailsInfo {...state} />
            </Col>
            <Col lg={7} md={24}>
              <OrderInfo {...state} />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col lg={7} md={24} style={{display: "flex", justifyContent: "center"}}>
              {state && state.characteristics && (
                <ProductChar characteristics={state.characteristics} />
              )}
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
