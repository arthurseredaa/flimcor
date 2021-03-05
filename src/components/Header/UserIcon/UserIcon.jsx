import GirlIcon from "../../../assets/icons/girl-icon.png";

import classes from "./UserIcon.module.css";

export const UserIcon = ({ collapsed }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.userIconWrapper}>
        <img
          src={GirlIcon}
          alt="user icon"
          width="34px"
          className={classes.userIcon}
        />
      </div>
      {collapsed && (
        <span className={classes.userName}>
          Ольга
          <br /> Пліщук
        </span>
      )}
      {!collapsed && <i className={classes.arrowDown}></i>}
    </div>
  );
};
