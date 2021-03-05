import classes from "./Finances.module.css";
import DollarIcon from "../../../assets/icons/dollar-icon.svg";
import { useState } from "react";
import { FinancesModal } from "./FinancesModal/FinancesModal";
import { numberFormat } from "../../../helpers/numberFormat";

export const Finances = ({ finances, collapsed }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleHide = () => setShowModal(false);

  return (
    <div>
      <div
        onClick={() => (showModal ? handleHide() : handleShow())}
        className={classes.financesWrapper}
        style={
          collapsed
            ? { backgroundColor: "transparent", position: "static" }
            : undefined
        }
      >
        <span
          className={classes.money}
          style={
            collapsed
              ? {
                  backgroundColor: "#4E9616",
                  color: "#fff",
                  borderRadius: "3px",
                  fontSize: 15,
                  padding: "1px 5px",
                }
              : undefined
          }
        >
          {numberFormat(finances, "USD")} $
        </span>
        <div
          style={{
            mask: `url(${DollarIcon}) no-repeat center`,
            backgroundColor: `${collapsed ? "#727478" : "#175FF2"}`,
            width: 17,
            height: 17,
          }}
        ></div>
      </div>
      <FinancesModal showModal={showModal} />
    </div>
  );
};
