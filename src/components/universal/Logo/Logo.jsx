import Logo from "../../../assets/icons/logo.svg";
import classes from "./Logo.module.css"

export const AppLogo = ({ withText, styles }) => (
  <div style={styles} className={classes.logo + " logo"}>
    <img src={Logo} alt="Flimcor" width="24" className={classes.logoIcon} />
    {withText && "Flimcor"}
  </div>
);
