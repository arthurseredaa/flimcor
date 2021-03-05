import { Checkbox } from "antd";

import classes from "./CurrencyItem.module.css";
import Bitcoin from "../../../../../assets/currency-icons/bitcoin.svg";
import Dollar from "../../../../../assets/currency-icons/dollar.svg";
import Euro from "../../../../../assets/currency-icons/euro.svg";
import PoundSterling from "../../../../../assets/currency-icons/pound-sterling.svg";
import Grivnya from "../../../../../assets/currency-icons/grivnya.svg";

export const CurrencyItem = ({ code, value, currency, setCurrency }) => {
  let img;

  switch (code) {
    case "EUR": {
      img = Euro;
      break;
    }
    case "USD": {
      img = Dollar;
      break;
    }
    case "UAH": {
      img = Grivnya;
      break;
    }
    default:
      img = Bitcoin;
      break;
  }

  return (
    <div className={classes.currencyItem}>
      <Checkbox
        className={classes.checkbox}
        checked={currency === code}
        onChange={() => setCurrency(code)}
      />
      <div
        style={{
          mask: `url(${img}) no-repeat center`,
          width: "20px",
          height: "20px",
          backgroundColor: currency === code ? "#005BE4" : "#838B95",
          marginRight: "14px"
        }}
      ></div>
      <p
        style={{ color: currency === code ? "#005BE4" : undefined }}
        className={classes.currencyValue}
      >
        {code} {value}
      </p>
    </div>
  );
};
