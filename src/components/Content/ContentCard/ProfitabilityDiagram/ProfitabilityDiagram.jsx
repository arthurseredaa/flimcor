import { checkProfitability } from "../../../../helpers/checkProfitability";
import classes from "./ProfitabilityDiagram.module.css";

export const ProfitabilityDiagram = ({profitability}) => {
  let color = checkProfitability(profitability);

  return (
    <div className={classes.diagramWrapper}>
      <div style={{backgroundColor: color === "#EA565E" ? color : undefined}} className={classes.firstItem}></div>
      <div style={{backgroundColor: color === "#EBA80F" ? color : undefined}} className={classes.secondItem}></div>
      <div style={{backgroundColor: color === "#4E9616" ? color : undefined}} className={classes.thirdItem}></div>
    </div>
  )
}
