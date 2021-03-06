import { Layout, Menu } from "antd";

import Catalog from "../../assets/icons/catalog.svg";
import Orders from "../../assets/icons/orders.svg";
import User from "../../assets/icons/user.svg";
import Cart from "../../assets/icons/cart.svg";
import Box from "../../assets/icons/box.svg";
import Money from "../../assets/icons/money.svg";

import classes from "./Sidebar.module.css";
import { AppLogo } from "../universal/Logo/Logo";

const { Sider } = Layout;

// TODO кривий елемент меню доробити

export const Sidebar = ({ setCollapsed }) => {
  return (
    <Sider
      className="page-layout-sider"
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
      onCollapse={(collapse) => setCollapsed(collapse)}
      width="180"
    >
      <AppLogo withText styles={{padding: "17px 17px"}} />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["Catalog"]}
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
    </Sider>
  );
};
