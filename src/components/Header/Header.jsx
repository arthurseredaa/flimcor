import { PageHeader } from "antd";
import { Drawer } from "antd";
import { Finances } from "./Finances/Finances";
import { UserIcon } from "./UserIcon/UserIcon";
import BackArrowIcon from "../../assets/icons/back-arrow.svg";
import classes from "./Header.module.css";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import Catalog from "../../assets/icons/catalog.svg";
import Orders from "../../assets/icons/orders.svg";
import User from "../../assets/icons/user.svg";
import Cart from "../../assets/icons/cart.svg";
import Box from "../../assets/icons/box.svg";
import Money from "../../assets/icons/money.svg";

import { AppLogo } from "../universal/Logo/Logo";

const BackArrow = () => (
  <img src={BackArrowIcon} alt="back arrow" height="15px" />
);
const TitleText = () => <p className={classes.titleText}>Назад</p>;

export const Header = ({ collapsed }) => {
  const [visible, setVisible] = useState(false);

  const CloseDrawer = () => (
    <span
      style={{
        color: "#BFBFBF",
        fontWeight: 400,
        fontSize: 14,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      Меню
      <span style={{ fontSize: 30, fontWeight: 300, marginLeft: 14 }}>
        &#10005;
      </span>
    </span>
  );

  const DrawerHeader = () => (
    <div>
      <AppLogo withText styles={{margin: "14px 0 14px 0px"}} />
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 12px 10px"}}>
        <UserIcon collapsed={collapsed} />
        <Finances finances="1265" collapsed={collapsed} />
      </div>
    </div>
  );

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
      <Drawer
        title={<DrawerHeader />}
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
        closeIcon={<CloseDrawer />}
        width="100vw"
        drawerStyle={{ backgroundColor: "#212122", color: "#fff", padding: 0 }}
        headerStyle={{
          backgroundColor: "#23232B",
          border: "none",
          height: "110px",
          color: "#fff",
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          style={{
            backgroundColor: "#212122",
          }}
        >
          <Menu.Item key="Catalog" className={classes.menuItem}>
            <img src={Catalog} alt="catalog" />
            Каталог
          </Menu.Item>
          <Menu.Item key="Orders" className={classes.menuItem}>
            <img src={Cart} alt="cart" />
            Заказы
          </Menu.Item>
          <Menu.Item key="Users order" className={classes.menuItem}>
            <img src={Orders} alt="orders" />
            Заказы пользователей
          </Menu.Item>
          <Menu.Item key="Users" className={classes.menuItem}>
            <img src={User} alt="users" />
            Пользователи
          </Menu.Item>
          <Menu.Item key="Box" className={classes.menuItem}>
            <img src={Box} alt="box" />
            Поставщики
          </Menu.Item>
          <Menu.Item key="Money" className={classes.menuItem}>
            <img src={Money} alt="finances" />
            Финансы
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};
