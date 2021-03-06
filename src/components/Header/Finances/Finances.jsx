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
        onClick={(e) => {
          e.stopPropagation();
          if (showModal) {
            handleHide();
          } else {
            handleShow();
          }
        }}
        className={classes.financesWrapper}
        style={
          collapsed && showModal
            ? { backgroundColor: "#2F2F37", position: "static", width: "105px" }
            : collapsed
            ? {
                backgroundColor: "transparent",
                position: "static",
                width: "105px",
              }
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
          <FinancesModal showModal={showModal} collapsed={collapsed} />
          <div
            style={{
              mask: `url(${DollarIcon}) no-repeat center`,
              backgroundColor: `${collapsed ? "#727478" : "#175FF2"}`,
              width: 17,
              height: 17,
              position: "absolute",
              right: "-25px",
              top: "1px",
            }}
          ></div>
        </span>
      </div>
    </div>
  );
};
