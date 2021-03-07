import { Menu, Drawer } from "antd";

import Catalog from "../../../assets/icons/catalog.svg";
import Orders from "../../../assets/icons/orders.svg";
import User from "../../../assets/icons/user.svg";
import Cart from "../../../assets/icons/cart.svg";
import Box from "../../../assets/icons/box.svg";
import Money from "../../../assets/icons/money.svg";

import { AppLogo } from "../../universal/Logo/Logo";
import { Finances } from "../Finances/Finances";
import { UserIcon } from "../UserIcon/UserIcon";
import { useHistory } from "react-router";

const CloseDrawer = ({classes}) => (
  <span className={classes.closeDrawer}>
    Меню
    <span style={{ fontSize: 30, fontWeight: 300, marginLeft: 14 }}>
      &#10005;
    </span>
  </span>
);

const DrawerHeader = ({collapsed}) => (
  <div>
    <AppLogo withText styles={{ margin: "14px 0 14px 0px" }} />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 12px 10px",
      }}
    >
      <UserIcon collapsed={collapsed} />
      <Finances finances="1265" collapsed={collapsed} />
    </div>
  </div>
);

export const CollapsedMenu = ({ classes, setVisible, collapsed, visible }) => {
  const history = useHistory();

  return (
    <Drawer
      title={<DrawerHeader collapsed={collapsed} />}
      placement="left"
      onClick={() => setVisible(false)}
      onClose={() => setVisible(false)}
      visible={visible}
      closeIcon={<CloseDrawer classes={classes} />}
      width="100vw"
      drawerStyle={{ backgroundColor: "#212122", color: "#fff", padding: 0 }}
      headerStyle={{
        backgroundColor: "#23232B",
        border: "none",
        height: "120px",
        color: "#fff",
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        style={{
          backgroundColor: "#212122",
          fontSize: 18
        }}
      >
        <Menu.Item key="Catalog" className={classes.menuItem}  onClick={() => history.push("/")}>
          <img src={Catalog} width="16px" alt="catalog" />
          Каталог
        </Menu.Item>
        <Menu.Item key="Orders" className={classes.menuItem}>
          <img src={Cart} width="16px" alt="cart" />
          Заказы
        </Menu.Item>
        <Menu.Item key="Users order" className={classes.menuItem}>
          <img src={Orders} width="16px" alt="orders" />
          Заказы пользователей
        </Menu.Item>
        <Menu.Item key="Users" className={classes.menuItem}>
          <img src={User} width="16px" alt="users" />
          Пользователи
        </Menu.Item>
        <Menu.Item key="Box" className={classes.menuItem}>
          <img src={Box} width="16px" alt="box" />
          Поставщики
        </Menu.Item>
        <Menu.Item key="Money" className={classes.menuItem}>
          <img src={Money} width="16px" alt="finances" />
          Финансы
        </Menu.Item>
      </Menu>
    </Drawer>
  );
};
