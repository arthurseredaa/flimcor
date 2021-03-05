import { PageHeader } from "antd";
import { Finances } from "./Finances/Finances";
import { UserIcon } from "./UserIcon/UserIcon";
import BackArrowIcon from "../../assets/icons/back-arrow.svg";
import classes from "./Header.module.css";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { CollapsedMenu } from "./CollapsedMenu/CollapsedMenu";

const BackArrow = () => (
  <img src={BackArrowIcon} alt="back arrow" height="15px" />
);

const TitleText = () => <p className={classes.titleText}>Назад</p>;

export const Header = ({ collapsed }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <PageHeader
        className="page-layout-header"
        onBack={() => (collapsed ? setVisible(true) : null)}
        title={collapsed ? " " : <TitleText />}
        backIcon={collapsed ? <MenuOutlined /> : <BackArrow />}
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
