import { gql, useQuery } from "@apollo/client";

import { Card } from "antd";
import { useState } from "react";
import { CurrencyItem } from "./CurrencyItem/CurrencyItem";

import InformationIcon from "../../../../assets/icons/information.svg";
import classes from "./FinancesModal.module.css";

const GET_CURRENCIES = gql`
  query getCurrencies {
    currencies {
      _id
      value
      name
      code
      badge
    }
  }
`;

const Title = () => (
  <p className={classes.modalTitle}>
    Мої фінанси<i className={classes.arrowRight}></i>
  </p>
);

const MyMoney = () => (
  <p style={{ fontWeight: 500, fontSize: "18px" }}>
    <span style={{ color: "#005BE4" }}>$</span> 854.1
  </p>
);

export const FinancesModal = ({ showModal }) => {
  const { data, error, loading } = useQuery(GET_CURRENCIES);
  const [currency, setCurrency] = useState("UAH");

  if (error) console.log(error);

  return (
    <>
      {showModal ? (
        <Card
          title={<Title />}
          extra={<MyMoney />}
          className={classes.modalCard}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h1 style={{ margin: 0 }}>Основна валюта</h1>
            <img
              src={InformationIcon}
              style={{ marginLeft: "7px", cursor: "pointer" }}
              alt="info"
            />
          </div>
          {loading && <p>Loading...</p>}
          {data &&
            data?.currencies.map(({ code, value, _id }) => (
              <CurrencyItem
                key={_id}
                code={code}
                value={value}
                currency={currency}
                setCurrency={setCurrency}
              />
            ))}
        </Card>
      ) : null}
    </>
  );
};
