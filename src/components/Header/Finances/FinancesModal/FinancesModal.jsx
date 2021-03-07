import { gql, useQuery } from "@apollo/client";

import { Card, Tooltip } from "antd";
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

const MyMoney = ({ collapsed }) => (
  <p
    style={{
      fontWeight: 500,
      fontSize: "18px",
      color: collapsed ? "#fff" : "#000",
    }}
  >
    <span style={{ color: "#4C7EFF" }}>$</span> 854.1
  </p>
);

export const FinancesModal = ({ showModal, collapsed }) => {
  const { data, error, loading } = useQuery(GET_CURRENCIES);
  const [currency, setCurrency] = useState("UAH");

  if (error) console.log(error);

  return (
    <>
      {showModal ? (
        <Card
          title={<Title />}
          extra={<MyMoney collapsed={collapsed} />}
          className={classes.modalCard}
          bordered={false}
          headStyle={
            collapsed ? { borderBottom: "1px solid #3C3C46" } : undefined
          }
          style={
            collapsed
              ? {
                  backgroundColor: "#2F2F37",
                  color: "#fff",
                  zIndex: "10",
                  width: "96vw",
                  right: "-53%",
                  top: "35px",
                }
              : { borderRadius: "5px" }
          }
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h1
              style={{
                margin: "10px 0 0",
                color: collapsed ? "#fff" : undefined,
              }}
            >
              Основна валюта
            </h1>
            <Tooltip palcement="top" title="Валюта">
              <img
                src={InformationIcon}
                style={{ margin: "10px 0 0 7px", cursor: "pointer" }}
                alt="info"
              />
            </Tooltip>
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
