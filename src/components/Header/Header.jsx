import { PageHeader } from "antd";
import { Finances } from "./Finances/Finances";
import { UserIcon } from "./UserIcon/UserIcon";
import BackArrowIcon from "../../assets/icons/back-arrow.svg";
import classes from "./Header.module.css";
import { useState } from "react";
import { CollapsedMenu } from "./CollapsedMenu/CollapsedMenu";
import BurgerIcon from "../../assets/icons/burger-menu.svg";
import { useHistory } from "react-router-dom";

const BackArrow = () => {
  const history = useHistory();
  return <img src={BackArrowIcon} alt="back arrow" height="20px" onClick={() => history.goBack()} />
};

const TitleText = () => <p className={classes.titleText}>Назад</p>;

const BurgerMenuIcon = () => <img style={{userSelect: "none"}} src={BurgerIcon} alt="burger icon" />

export const Header = ({ collapsed }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <PageHeader
        className="page-layout-header"
        onBack={() => (collapsed ? setVisible(true) : null)}
        title={collapsed ? " " : <TitleText />}
        backIcon={collapsed ? <BurgerMenuIcon /> : <BackArrow />}
        style={{
          height: "67px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!collapsed && (
          <>
            <Finances finances="1265" collapsed={collapsed} />
            <UserIcon collapsed={collapsed} />
          </>
        )}
      </PageHeader>
      <CollapsedMenu
        setVisible={setVisible}
        classes={classes}
        collapsed={collapsed}
        visible={visible}
      />
    </div>
  );
};
